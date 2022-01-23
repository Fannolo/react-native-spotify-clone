import api from 'rnplayer/api';
import { getFeaturedPlaylists, getPlaylistDetail } from './playlist';

const musicAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    getFeaturedPlaylists: builder.query({
      query: getFeaturedPlaylists,
    }),
    getPlaylistDetail: builder.query({
      query: getPlaylistDetail,
    }),
  }),
  overrideExisting: true,
});

export default musicAPI;
