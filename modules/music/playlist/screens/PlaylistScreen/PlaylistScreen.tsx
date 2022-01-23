import React, { useCallback, useEffect } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

import { useLazyGetPlaylistDetailQuery } from 'rnplayer/api/music/hooks';
import { ApiPayload, PlaylistDetailId } from 'rnplayer/api/types';
import colors from 'rnplayer/utils/colors';

import PlaylistDetailHeader from '../../components/PlaylistDetailHeader';
import Song from '../../components/Song';
import Title from '../../components/typography/Title';
import { RootStackParamList } from 'rnplayer/navigation/constants';

const PlaylistScreen = (): JSX.Element => {
  const route = useRoute<RouteProp<RootStackParamList>>();
  const [getPlaylistDetail, { data, isError, isLoading, isSuccess }] =
    useLazyGetPlaylistDetailQuery();

  const retrievePlaylistDetail = useCallback(() => {
    const request: ApiPayload<PlaylistDetailId, void> = {
      queryParams: {
        id: route?.params?.id || '',
      },
      requestBody: undefined,
    };
    getPlaylistDetail(request);
  }, [getPlaylistDetail, route?.params?.id]);

  useEffect(() => {
    retrievePlaylistDetail();
  }, [retrievePlaylistDetail]);

  const renderItems = useCallback(({ item: song, index }) => {
    return <Song song={song} key={song.track.name} />;
  }, []);

  return (
    <View style={styles.container}>
      {isSuccess && (
        <>
          <PlaylistDetailHeader
            description={data.description}
            images={data.images}
            followers={data.followers}
            owner={data.owner}
            name={data.name}
          />
          <View style={styles.songContainer}>
            <FlatList
              data={data.tracks.items}
              renderItem={renderItems}
              showsVerticalScrollIndicator={false}
              scrollEnabled
              testID='playlist-selection'
            />
          </View>
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
  container: {
    alignItems: 'center',
    backgroundColor: colors.dark.black,
    flex: 1,
    justifyContent: 'center',
  },
  songContainer: { flex: 1, paddingLeft: 15, width: '100%' },
});

export default PlaylistScreen;
