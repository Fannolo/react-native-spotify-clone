interface Image {
  height: number | string | null;
  url: string;
  width: number | string | null;
}

interface ExternalUrls {
  spotify: string;
}

interface Owner {
  display_name: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  type: string;
  uri: string;
}

interface Tracks {
  href: string;
  total: number;
}

export interface Playlist {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
  primary_color: string | null;
  public: string | null;
  snapshot_id: string;
  tracks: Tracks;
  type: string;
  uri: string;
}

export interface FeaturedPlaylistResponse {}
