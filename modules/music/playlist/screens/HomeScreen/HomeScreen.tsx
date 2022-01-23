import React, { useCallback, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useLazyGetFeaturedPlaylistsQuery } from 'rnplayer/api/music/hooks';
import colors from 'rnplayer/utils/colors';
import PlaylistCover from '../../components/PlaylistCover/PlaylistCover';
import Title from '../../components/typography/Title/Title';

const HomeScreen = (): JSX.Element => {
  const [getFeaturedPlaylists, { data, isError, isLoading, isSuccess }] =
    useLazyGetFeaturedPlaylistsQuery(undefined);

  const handlePlaylist = useCallback(async () => {
    await getFeaturedPlaylists(undefined, undefined);
  }, [getFeaturedPlaylists]);

  const renderItems = useCallback(({ item: playlist, index }) => {
    return <PlaylistCover playlist={playlist} key={index} />;
  }, []);

  useEffect(() => {
    handlePlaylist();
  }, [handlePlaylist]);

  return (
    <View style={styles.container}>
      {isSuccess && (
        <>
          <View style={styles.titleContainer}>
            <Title text={data.message} />
          </View>
          <FlatList
            contentContainerStyle={styles.albumContainer}
            data={data.playlists.items}
            numColumns={2}
            renderItem={renderItems}
            showsVerticalScrollIndicator={false}
            scrollEnabled
            testID='playlist-selection'
          />
        </>
      )}
      {isLoading && (
        <ActivityIndicator size='small' color={colors.dark.green} />
      )}
      {isError && <Title text='Application Error' />}
    </View>
  );
};

const styles = StyleSheet.create({
  albumContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: colors.dark.black,
    flex: 1,
    justifyContent: 'center',
  },
  titleContainer: {
    justifyContent: 'flex-start',
    margin: 15,
  },
});

export default HomeScreen;
