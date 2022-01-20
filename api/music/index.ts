import api from 'rnplayer/api';
import { getFeaturedPlaylists, getPlaylistDetail } from './playlist';

const musicAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    getFeaturedPlaylists: getFeaturedPlaylists(builder),
    getPlaylistDetail: getPlaylistDetail(builder),
  }),
  overrideExisting: true,
});

export default musicAPI;
