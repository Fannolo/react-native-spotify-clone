/* eslint-disable camelcase */
import React from 'react';
import { render } from '@testing-library/react-native';
import PlaylistDetailHeader from './index';

const renderPlaylistDetailHeader = () => {
  return render(
    <PlaylistDetailHeader
      description='Hello'
      images={[
        {
          height: null,
          url: 'https://i.scdn.co/image/ab67706f00000003571c3e893c065ed5832b3a3e',
          width: null,
        },
      ]}
      followers={{
        href: null,
        total: 9923473,
      }}
      owner={{
        display_name: 'Spotify',
        external_urls: {
          spotify: 'https://open.spotify.com/user/spotify',
        },
        href: 'https://afternoon-waters-49321.herokuapp.com/v1/users/spotify',
        id: 'spotify',
        type: 'user',
        uri: 'spotify:user:spotify',
      }}
      name='name'
    />,
  );
};
describe('PlaylistDetailHeader', () => {
  it('should render the component with a title and a description as expected', () => {
    const { getByText } = renderPlaylistDetailHeader();
    expect(getByText('Hello')).not.toBeNull();
    expect(getByText('name')).not.toBeNull();
    expect(getByText('Playlist by Spotify')).not.toBeNull();
    expect(getByText('9.9M followers')).not.toBeNull();
  });
});
