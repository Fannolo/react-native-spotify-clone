import React from 'react';
import { TouchableOpacity } from 'react-native';

import TrackPlayer, {
  State,
  usePlaybackState,
} from 'react-native-track-player';
import Subtitle from '../typography/Subtitle';

const PlayButton = () => {
  const playbackState = usePlaybackState();
  return playbackState !== State.Playing ? (
    <TouchableOpacity onPress={TrackPlayer.play}>
      <Subtitle text='Play' />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={TrackPlayer.pause}>
      <Subtitle text='Pause' />
    </TouchableOpacity>
  );
};

export default React.memo(PlayButton);
