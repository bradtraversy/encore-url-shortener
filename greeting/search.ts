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
