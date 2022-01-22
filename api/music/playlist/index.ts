import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { AxiosRequestConfig } from 'axios';
import { ApiPayload, AxiosBaseQueryFn } from 'rnplayer/api/types';
import { FEATURED_PLAYLISTS, PLAYLIST_DETAIL } from './constants';

export const getFeaturedPlaylists = (): AxiosRequestConfig => ({
  url: FEATURED_PLAYLISTS,
  method: 'get',
});

export const getPlaylistDetail = (id: string | number) => ({
  url: `${PLAYLIST_DETAIL}${id}`,
  method: 'get',
});
