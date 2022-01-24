import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useCallback } from 'react';
import { Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RootStackParamList, Routes } from 'rnplayer/navigation/constants';
import { Playlist } from 'rnplayer/types/Playlist';

interface PlaylistCoverProps {
  playlist: Playlist;
}

const PlaylistCover = ({ playlist }: PlaylistCoverProps): JSX.Element => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleOnPress = useCallback(() => {
    navigation.navigate(Routes.PlaylistScreen, {
      id: playlist.id,
    });
  }, [navigation, playlist]);

  return (
    <TouchableOpacity
      onPress={handleOnPress}
      style={styles.container}
      testID='playlist-cover-button'
    >
      <Image
        style={styles.image}
        source={{ uri: playlist.images[0]?.url }}
        resizeMode='cover'
        testID='playlist-cover'
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { margin: 5 },
  image: {
    height: 170,
    width: 170,
  },
});

export default PlaylistCover;
