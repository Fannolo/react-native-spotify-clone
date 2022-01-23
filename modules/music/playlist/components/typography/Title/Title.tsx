import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from 'rnplayer/utils/colors';
import { fontSizes, fontWeights } from 'rnplayer/utils/consants';

interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps): JSX.Element => {
  return (
    <View>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: colors.dark.white,
    fontSize: fontSizes.title,
    fontWeight: fontWeights.bold,
  },
});

export default Title;
