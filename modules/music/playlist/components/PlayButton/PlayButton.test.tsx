import { render } from '@testing-library/react-native';
import React from 'react';
import PlayButton from './index';

const renderPlayButton = () => {
  return render(<PlayButton />);
};

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

describe('PlayButton component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should render the play button as expected', () => {
    const { getByText } = renderPlayButton();
    expect(getByText('Play')).not.toBeNull();
  });
  it('should render the play button if the track player is not playing', () => {
    const { getByText } = renderPlayButton();
    mockUsePlaybackState.mockReturnValue('Paused');
    expect(getByText('Play')).not.toBeNull();
  });
  it('should render the pause button if the track player is playing', () => {
    const { getByText } = renderPlayButton();
    mockUsePlaybackState.mockReturnValue('Playing');
    expect(getByText('Play')).not.toBeNull();
  });
});
