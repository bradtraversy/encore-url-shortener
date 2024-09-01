/*
 * This file is just to show you how to create endpoints with a query param. You can delete the "greeting" folder if you want.
 *
 */

import { api, Query } from 'encore.dev/api';

interface SearchParams {
  filter: Query<string>;
}

interface SearchResponse {
  matches: string;
}

export const search = api<SearchParams, SearchResponse>(
  {
    method: 'GET',
    path: '/greeting/search',
    expose: true,
  },
  async ({ filter }) => {
    return { matches: `Matched ${filter}` };
  }
);
