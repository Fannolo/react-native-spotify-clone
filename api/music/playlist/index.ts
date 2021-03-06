import { AxiosRequestConfig } from 'axios';
import { ApiPayload, PlaylistDetailId } from 'rnplayer/api/types';
import { FEATURED_PLAYLISTS, PLAYLIST_DETAIL } from './constants';

export const getFeaturedPlaylists = (): AxiosRequestConfig => ({
  url: FEATURED_PLAYLISTS,
  method: 'get',
});

export const getPlaylistDetail = ({
  queryParams,
}: ApiPayload<PlaylistDetailId, void>): AxiosRequestConfig => {
  return {
    url: `${PLAYLIST_DETAIL}${queryParams.id}`,
    method: 'get',
  };
};
