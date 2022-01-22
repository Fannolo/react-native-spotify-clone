import React, { useMemo } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ImageType, Owner } from 'rnplayer/types/Playlist';
import { Followers } from 'rnplayer/types/PlaylistDetail';
import colors from 'rnplayer/utils/colors';
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
    [colors],
  );

  return (
    <LinearGradient colors={gradientColors} style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={{ uri: images[0]?.url }}
          resizeMode={'contain'}
        />
        <View>
          <View style={styles.titleContainer}>
            <View>
              <Title text={name} />
              <Caption text={`Playlist by ${owner.display_name}`} />
            </View>
            <View>
              <Subtitle text={description} />
              <Caption text={`${followers.total} followers`} />
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    padding: 20,
  },
  innerContainer: {
    flexDirection: 'row',
  },
  titleContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image: {
    width: 150,
    height: 150,
    marginRight: 13,
  },
});

export default PlaylistDetailHeader;
