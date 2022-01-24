import { Song } from 'rnplayer/types/PlaylistDetail';

/* eslint-disable camelcase */
const mockedOwner = {
  display_name: 'display_name',
  external_urls: {
    spotify: 'spotify',
  },
  href: 'href',
  id: 'id',
  type: 'type',
  uri: 'url',
};

const mockedArtist = {
  external_urls: {
    spotify: 'spotify',
  },
  href: '',
  id: '1',
  name: 'artistname',
  type: 'type',
  uri: 'uri',
};

const mockedAlbum = {
  album_type: 'string',
  artists: [mockedArtist],
  available_markets: ['USA', 'UK'],
  external_urls: {
    spotify: 'string',
  },
  href: 'string',
  id: '1',
  images: [
    {
      height: null,
      url: 'url',
      width: null,
    },
  ],
  name: 'string',
  release_date: 'string',
  release_date_precision: 'string',
  total_tracks: 123,
  type: 'string',
  uri: 'string',
};

export const mockedSong = ({
  previewUrl,
}: {
  previewUrl: string | null;
}): Song => ({
  added_at: 'date',
  added_by: mockedOwner,
  is_local: false,
  primary_color: 'color',
  track: {
    album: mockedAlbum,
    artists: [mockedArtist],
    available_markets: ['USA', 'UK'],
    disc_number: 1,
    duration_ms: 12,
    episode: false,
    explicit: false,
    external_ids: {
      isrc: '',
    },
    external_urls: {
      spotify: 'spotify',
    },
    href: '',
    id: 'id',
    is_local: false,
    name: 'trackname',
    popularity: 123,
    preview_url: previewUrl,
    track: false,
    track_number: 1,
    type: '',
    uri: 'string',
  },
  video_thumbnail: {
    url: null,
  },
});
