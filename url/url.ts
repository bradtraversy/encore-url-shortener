import { api, APIError } from 'encore.dev/api';
import { SQLDatabase } from 'encore.dev/storage/sqldb';
import { randomBytes } from 'node:crypto';

const db = new SQLDatabase('url', { migrations: './migrations' });

interface UrlResponse {
  id: string;
  url: string;
}

interface UrlParams {
  url: string;
}

export const shorten = api(
  {
    method: 'POST',
    path: '/url',
    expose: true,
  },
  async ({ url }: UrlParams): Promise<UrlResponse> => {
    const id = randomBytes(6).toString('base64url');
    await db.exec`INSERT INTO url (id, original_url)
                  VALUES (${id}, ${url})`;
    return { id, url };
  }
);

export const getShortenedUrl = api(
  {
    method: 'GET',
    path: '/url/:id',
    expose: true,
  },
  async ({ id }: { id: string }): Promise<UrlResponse> => {
    const row = await db.queryRow`
      SELECT original_url FROM url WHERE id = ${id}
    `;
    if (!row) throw APIError.notFound('URL not found');
    return { id, url: row.original_url };
  }
);
