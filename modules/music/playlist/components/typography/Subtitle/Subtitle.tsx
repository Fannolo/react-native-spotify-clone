import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from 'rnplayer/utils/colors';
import { fontSizes, fontWeights } from 'rnplayer/utils/consants';

interface SubtitleProps {
  text: string;
}

const Subtitle = ({ text }: SubtitleProps) => {
  return (
    <View>
      <Text style={styles.subtitle}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: colors.dark.white,
    fontSize: fontSizes.subtitle,
    fontWeight: fontWeights.bold,
  },
});

export default Subtitle;
