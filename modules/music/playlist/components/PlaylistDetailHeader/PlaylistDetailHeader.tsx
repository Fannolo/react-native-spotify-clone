import React, { useMemo } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ImageType, Owner } from 'rnplayer/types/Playlist';
import { Followers } from 'rnplayer/types/PlaylistDetail';
import colors from 'rnplayer/utils/colors';
import getCollapsedValues from 'rnplayer/utils/getCollapsedValues';
import Caption from '../typography/Caption';
import Subtitle from '../typography/Subtitle';
import Title from '../typography/Title';

interface PlaylistDetailHeaderProps {
  description: string;
  images: ImageType[];
  followers: Followers;
  owner: Owner;
  name: string;
}

const PlaylistDetailHeader = ({
  description,
  images,
  followers,
  owner,
  name,
}: PlaylistDetailHeaderProps): JSX.Element => {
  const gradientColors = useMemo(
    () => [colors.dark.black, colors.dark.darkGreen],
    [],
  );

  return (
    <LinearGradient colors={gradientColors} style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: images[0]?.url }}
        resizeMode='contain'
      />
      <View style={styles.titleContainer}>
        <View>
          <Title text={name} />
          <Caption text={`Playlist by ${owner.display_name}`} />
        </View>
        <View>
          <Subtitle text={description} />
          <Caption text={`${getCollapsedValues(followers.total)} followers`} />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
  },
  image: {
    height: 150,
    marginRight: 13,
    width: 150,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default PlaylistDetailHeader;
