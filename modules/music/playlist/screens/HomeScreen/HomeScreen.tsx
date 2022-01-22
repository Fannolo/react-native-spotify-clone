import React, { useCallback, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useLazyGetFeaturedPlaylistsQuery } from 'rnplayer/api/music/hooks';
import colors from 'rnplayer/utils/colors';
import PlaylistCover from '../../components/PlaylistCover/PlaylistCover';
import Title from '../../components/typography/Title/Title';

const HomeScreen = (): JSX.Element => {
  const [getFeaturedPlaylists, { data, isError, isLoading, isSuccess }] =
    useLazyGetFeaturedPlaylistsQuery(undefined);

  const handlePlaylist = async () => {
    await getFeaturedPlaylists(undefined, undefined);
  };

  const renderItems = useCallback(({ item: playlist, index }) => {
    return <PlaylistCover playlist={playlist} key={index} />;
  }, []);

  useEffect(() => {
    handlePlaylist();
  }, []);

  return (
    <View style={styles.container}>
      {isSuccess && (
        <>
          <Title text={data.message} />
          <FlatList
            numColumns={2}
            data={data.playlists.items}
            renderItem={renderItems}
            showsVerticalScrollIndicator={false}
            scrollEnabled
            testID='playlist-selection'
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.dark.black,
  },
});

export default HomeScreen;
