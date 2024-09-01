/*
 * This file is just to show you how to create endpoints. You can delete the "greeting" folder if you want.
 *
 */

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
