import { useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useLazyGetPlaylistDetailQuery } from 'rnplayer/api/music/hooks';
import { ApiPayload, PlaylistDetailId } from 'rnplayer/api/types';
import colors from 'rnplayer/utils/colors';
import PlaylistDetailHeader from '../../components/PlaylistDetailHeader';
import Song from '../../components/Song';
import Title from '../../components/typography/Title';

const PlaylistScreen = (): JSX.Element => {
  const route = useRoute();
  const [getPlaylistDetail, { data, isError, isLoading, isSuccess }] =
    useLazyGetPlaylistDetailQuery();

  const retrievePlaylistDetail = useCallback(() => {
    const request: ApiPayload<PlaylistDetailId, void> = {
      queryParams: {
        id: route.params.id,
      },
      requestBody: undefined,
    };
    getPlaylistDetail(request);
  }, []);

  useEffect(() => {
    retrievePlaylistDetail();
  }, []);

  const renderItems = useCallback(({ item: song, index }) => {
    return <Song key={index} />;
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
          <FlatList
            data={data.tracks}
            renderItem={renderItems}
            showsVerticalScrollIndicator={false}
            scrollEnabled
            testID='playlist-selection'
          />
        </>
      )}
      {isLoading && <Title text={'loading'} />}
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

export default PlaylistScreen;
