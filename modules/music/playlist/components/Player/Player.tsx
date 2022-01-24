import React, { createContext, useCallback, useState } from 'react';
import { View, StyleSheet } from 'react-native';

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

  return (
    <>
      <PlayerContext.Provider value={value ? value : { handleSong }}>
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
    alignItems: 'center',
    backgroundColor: colors.dark.black,
    borderTopColor: colors.dark.green,
    borderTopWidth: 2,
    flexDirection: 'row',
    height: 80,
    justifyContent: 'space-between',
    padding: 20,
  },
});

export default {
  Provider: PlayerProvider,
  Consumer: PlayerContext.Consumer,
};
