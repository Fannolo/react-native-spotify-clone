/* eslint-disable camelcase */
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import PlaylistCover from './index';

const mockNavigate = jest.fn();

const mockPlaylistObject = {
  collaborative: false,
  description: 'description',
  external_urls: {
    spotify: 'spotify',
  },
  href: 'href',
  id: '1',
  images: [
    {
      height: null,
      url: 'url',
      width: null,
    },
  ],
  name: 'name',
  owner: {
    display_name: 'display_name',
    external_urls: {
      spotify: 'spotify',
    },
    href: 'href',
    id: 'id',
    type: 'type',
    uri: 'url',
  },
  primary_color: 'primary_color',
  public: 'public',
  snapshot_id: 'snapshot_id',
  tracks: {
    href: 'href',
    total: 123,
  },
  type: 'type',
  uri: 'uri',
};

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(() => ({
    navigate: mockNavigate,
  })),
}));

const renderPlaylistCover = () => {
  return render(<PlaylistCover playlist={mockPlaylistObject} />);
};
describe('PlaylistCover component', () => {
  it('should render the component correctly', () => {
    const { getByTestId } = renderPlaylistCover();
    expect(getByTestId('playlist-cover')).not.toBeNull();
  });
  it('should navigate to the playlist detail screen with a parameter id', () => {
    const { getByTestId } = renderPlaylistCover();
    const playlistButton = getByTestId('playlist-cover-button');
    fireEvent.press(playlistButton);
    expect(mockNavigate).toHaveBeenCalledWith('PlaylistScreen', { id: '1' });
  });
});
