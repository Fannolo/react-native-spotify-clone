import React, { useCallback, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TrackPlayer from 'react-native-track-player';
import { Song as SongType } from 'rnplayer/types/PlaylistDetail';
import colors from 'rnplayer/utils/colors';
import { PlayerContext } from '../Player/Player';
import Caption from '../typography/Caption';

interface SongItemProps {
  song: SongType;
}

const Song = ({ song }: SongItemProps): JSX.Element => {
  const artist = useMemo(
    () => song.track.artists[0]?.name,
    [song.track.artists],
  );
  const isPreviewAvailable = useMemo(
    () => Boolean(song.track.preview_url),
    [song.track.preview_url],
  );

  const trackToPlay = useMemo(
    () => ({
      url: song.track.preview_url || '',
      title: song.track.name || '',
      artist: artist,
      duration: 411,
    }),
    [artist, song.track.name, song.track.preview_url],
  );

  const addPlayer = useCallback(async () => {
    const playerQueue = await TrackPlayer.getQueue();
    if (playerQueue.length > 0) {
      await TrackPlayer.reset();
    }
    await TrackPlayer.add([trackToPlay]);
    await TrackPlayer.play();
  }, [trackToPlay]);

  return (
    <PlayerContext.Consumer>
      {(context): JSX.Element => (
        <TouchableOpacity
          disabled={!isPreviewAvailable}
          style={styles.songContainer}
          onPress={() => {
            context?.handleSong({
              songName: song.track.name,
              artist: artist,
              // eslint-disable-next-line camelcase
              preview_url: song.track.preview_url,
            });
            addPlayer();
          }}
        >
          <Caption
            text={song.track.name}
            color={
              isPreviewAvailable ? colors.dark.white : colors.dark.darkGray
            }
          />
          {artist && (
            <Caption
              text={artist}
              color={
                isPreviewAvailable ? colors.dark.gray : colors.dark.darkGray
              }
            />
          )}
        </TouchableOpacity>
      )}
    </PlayerContext.Consumer>
  );
};

const styles = StyleSheet.create({
  songContainer: {
    padding: 10,
  },
});

export default Song;
