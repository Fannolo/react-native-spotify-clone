import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { AxiosBaseQueryFn } from 'rnplayer/api/types';
import { FEATURED_PLAYLISTS, PLAYLIST_DETAIL } from './constants';

export const getFeaturedPlaylists = (
  builder: EndpointBuilder<AxiosBaseQueryFn, never, 'api'>,
) =>
  builder.query({
    query: () => ({
      url: FEATURED_PLAYLISTS,
      method: 'get',
    }),
  });

export const getPlaylistDetail = (
  builder: EndpointBuilder<AxiosBaseQueryFn, never, 'api'>,
) =>
  builder.query({
    query: (id) => ({
      url: `${PLAYLIST_DETAIL}${id}`,
      method: 'get',
    }),
  });
