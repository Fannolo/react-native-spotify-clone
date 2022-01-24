/* eslint-disable camelcase */
import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import Song from './index';
import { mockedSong } from './__tests__/song';
import { PlayerContext } from '../Player/Player';
import TrackPlayer, { Track } from 'react-native-track-player';

const mockedHandleSong = jest.fn();

const contextValue = {
  handleSong: mockedHandleSong,
};

const renderSongComponent = ({
  previewUrl = 'preview',
}: {
  previewUrl: string | null;
}) => {
  return render(
    <PlayerContext.Provider value={contextValue}>
      <Song song={mockedSong({ previewUrl })} />
    </PlayerContext.Provider>,
  );
};
describe('Song component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('render', () => {
    it('should render the component as expected', () => {
      const { getByText } = renderSongComponent({ previewUrl: 'preview' });
      expect(getByText('trackname')).not.toBeNull();
      expect(getByText('artistname')).not.toBeNull();
    });
    it('should render the song pressable if the the preview is available', () => {
      const { getByTestId } = renderSongComponent({ previewUrl: 'preview' });
      const songPressable = getByTestId('song-item');
      expect(songPressable).not.toBeDisabled();
    });
    it('should not render the song pressable if the the preview is not available', () => {
      const { getByTestId } = renderSongComponent({ previewUrl: null });
      const songPressable = getByTestId('song-item');
      expect(songPressable).toBeDisabled();
    });
  });

  describe('when the user presses the song', () => {
    it('should update the context values by calling context.handleSong', () => {
      const { getByTestId } = renderSongComponent({ previewUrl: 'preview' });
      const songPressable = getByTestId('song-item');
      fireEvent.press(songPressable);
      expect(mockedHandleSong).toHaveBeenCalledWith({
        artist: 'artistname',
        preview_url: 'preview',
        songName: 'trackname',
      });
    });
    it('should add to the player the new song', async () => {
      jest
        .spyOn(TrackPlayer, 'getQueue')
        .mockReturnValue(Promise.resolve<Track[]>([]));
      const add = jest.spyOn(TrackPlayer, 'add');
      const { getByTestId } = renderSongComponent({ previewUrl: 'preview' });
      const songPressable = getByTestId('song-item');
      fireEvent.press(songPressable);
      await waitFor(() =>
        expect(add).toHaveBeenCalledWith([
          {
            artist: 'artistname',
            duration: 411,
            title: 'trackname',
            url: 'preview',
          },
        ]),
      );
    });
    it('should call reset the player queue if there are other songs reproducing', async () => {
      jest.spyOn(TrackPlayer, 'getQueue').mockReturnValue(
        Promise.resolve<Track[]>([
          {
            url: 'preview',
            title: 'trackname',
            artist: 'artistname',
            duration: 12,
          },
        ]),
      );
      const reset = jest.spyOn(TrackPlayer, 'reset');
      const { getByTestId } = renderSongComponent({ previewUrl: 'preview' });
      const songPressable = getByTestId('song-item');
      fireEvent.press(songPressable);
      await waitFor(() => expect(reset).toHaveBeenCalled());
    });
    it('should play the newly selected song', async () => {
      jest
        .spyOn(TrackPlayer, 'getQueue')
        .mockReturnValue(Promise.resolve<Track[]>([]));
      const play = jest.spyOn(TrackPlayer, 'play');

      const { getByTestId } = renderSongComponent({ previewUrl: 'preview' });
      const songPressable = getByTestId('song-item');
      fireEvent.press(songPressable);
      await waitFor(() => expect(play).toHaveBeenCalled());
    });
  });
});
