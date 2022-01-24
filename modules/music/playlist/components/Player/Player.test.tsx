import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Player from './index';

const mockUsePlaybackState = jest.fn().mockReturnValue('Paused');

jest.unmock('react-native-track-player');
jest.mock('react-native-track-player', () => ({
  usePlaybackState: () => mockUsePlaybackState,
  registerPlaybackService: jest.fn(),
  play: jest.fn(),
  pause: jest.fn(),
  State: {
    None: 'None',
    Ready: 'Ready',
    Playing: 'Playing',
    Paused: 'Paused',
    Stopped: 'Stopped',
    Buffering: 'Buffering',
    Connecting: 'Connecting',
  },
}));
const renderComponent = () =>
  render(
    <Player.Provider>
      <>
        <Text>App</Text>
        <Player.Consumer>
          {(context) => {
            return (
              <TouchableOpacity
                testID='test-button'
                onPress={() =>
                  context?.handleSong({
                    artist: 'artistname',
                    // eslint-disable-next-line camelcase
                    preview_url: 'preview',
                    songName: 'trackname',
                  })
                }
              />
            );
          }}
        </Player.Consumer>
      </>
    </Player.Provider>,
  );

describe('Player component', () => {
  it('should render the player at the bottom with the name of the song and the artist', () => {
    const { getByText, getByTestId } = renderComponent();
    const testButton = getByTestId('test-button');
    fireEvent.press(testButton);

    expect(getByText('trackname')).not.toBeNull();
    expect(getByText('artistname')).not.toBeNull();
  });
});
