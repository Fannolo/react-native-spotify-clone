import React, { createContext, useCallback, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import colors from 'rnplayer/utils/colors';
import PlayButton from '../PlayButton';
import Caption from '../typography/Caption';

interface PlayerContextInterface {
  songName: string | null;
  artist: string | null;
  preview_url: string | null;
}

type ContextInterface = {
  handleSong?: (player: PlayerContextInterface) => void;
} | null;

export const PlayerContext = createContext<ContextInterface>(null);

interface PlayerProvider {
  children: JSX.Element;
}

const PlayerProvider = ({ children }: PlayerProvider): JSX.Element => {
  const [playerValue, setPlayerValue] = useState<PlayerContextInterface>();

  const handleSong = useCallback(
    (player: PlayerContextInterface) => {
      setPlayerValue(player);
    },
    [playerValue],
  );

  return (
    <>
      <PlayerContext.Provider value={{ handleSong }}>
        {children}
      </PlayerContext.Provider>
      {playerValue &&
        playerValue.songName &&
        playerValue.artist &&
        playerValue.preview_url && (
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
        )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopColor: colors.dark.green,
    borderTopWidth: 2,
    height: 80,
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.dark.black,
  },
});

export default {
  Provider: PlayerProvider,
  Consumer: PlayerContext.Consumer,
};
