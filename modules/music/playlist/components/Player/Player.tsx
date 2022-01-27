import React, {
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { View, StyleSheet, Animated, useWindowDimensions } from 'react-native';
import { useProgress } from 'react-native-track-player';

import colors from 'rnplayer/utils/colors';

import PlayButton from '../PlayButton';
import Caption from '../typography/Caption';

interface PlayerContextInterface {
  songName: string | null;
  artist?: string | null;
  // eslint-disable-next-line camelcase
  preview_url: string | null;
}

type ContextType = {
  handleSong: (player: PlayerContextInterface) => void;
};

export const PlayerContext = createContext<ContextType | null>(null);

interface PlayerProvider {
  children: JSX.Element;
  value?: ContextType;
}

const PlayerProvider = ({ children, value }: PlayerProvider): JSX.Element => {
  const [playerValue, setPlayerValue] = useState<PlayerContextInterface>();

  const handleSong = useCallback((player: PlayerContextInterface) => {
    setPlayerValue(player);
  }, []);

  const { position, duration } = useProgress();
  const playerSongDuration = useRef(new Animated.Value(0)).current;
  const { width: windowWidth } = useWindowDimensions();

  const playerSongsAnimation = playerSongDuration.interpolate({
    inputRange: [0, duration],
    outputRange: [0, windowWidth],
  });

  useEffect(() => {
    Animated.spring(playerSongDuration, {
      toValue: position,
      useNativeDriver: false,
    }).start();
  }, [playerSongDuration, position]);

  return (
    <>
      <PlayerContext.Provider value={value ? value : { handleSong }}>
        {children}
      </PlayerContext.Provider>
      {playerValue &&
        playerValue.songName &&
        playerValue.artist &&
        playerValue.preview_url && (
          <>
            <Animated.View
              style={[
                styles.playDuration,
                {
                  width: playerSongsAnimation,
                },
              ]}
            />
            <View style={styles.container}>
              <View>
                <Caption
                  text={playerValue.songName}
                  color={colors.dark.white}
                  fontWeight='bold'
                />
                <Caption text={playerValue.artist} />
              </View>
              <PlayButton />
            </View>
          </>
        )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.dark.black,
    borderTopWidth: 2,
    flexDirection: 'row',
    height: 80,
    justifyContent: 'space-between',
    padding: 20,
  },
  playDuration: {
    backgroundColor: colors.dark.green,
    height: 3,
    left: 0,
    // position: 'absolute',
    // right: 0,
    // top: 0,
  },
});

export default {
  Provider: PlayerProvider,
  Consumer: PlayerContext.Consumer,
};
