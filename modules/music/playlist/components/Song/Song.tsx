import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Song as SongType } from 'rnplayer/types/PlaylistDetail';
import colors from 'rnplayer/utils/colors';
import Caption from '../typography/Caption';

interface SongItemProps {
  song: SongType;
}

const Song = ({ song }: SongItemProps): JSX.Element => {
  const artist = useMemo(() => song.track.artists[0]?.name, []);
  const isPreviewAvailable = useMemo(() => Boolean(song.track.preview_url), []);
  return (
    <TouchableOpacity
      disabled={!isPreviewAvailable}
      style={styles.songContainer}
    >
      <Caption
        text={song.track.name}
        color={isPreviewAvailable ? colors.dark.white : colors.dark.darkGray}
      />
      {artist && (
        <Caption
          text={artist}
          color={isPreviewAvailable ? colors.dark.gray : colors.dark.darkGray}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  songContainer: {
    padding: 10,
  },
});

export default Song;
