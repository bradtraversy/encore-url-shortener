import { api } from 'encore.dev/api';

interface Response {
  data: string;
}

export const greeting = api(
  {
    method: 'GET',
    path: '/greeting/:name',
    expose: true,
  },
  async ({ name }: { name: string }): Promise<Response> => {
    return { data: `Hello ${name}!` };
  }
);
