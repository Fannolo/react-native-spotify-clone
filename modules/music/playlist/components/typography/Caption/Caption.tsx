import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from 'rnplayer/utils/colors';
import { fontSizes, fontWeights } from 'rnplayer/utils/consants';

interface CaptionProps {
  text: string;
  color?: string;
}

const Caption = ({ text, color }: CaptionProps) => {
  return (
    <View>
      <Text
        style={[styles.caption, { color: color ? color : colors.dark.gray }]}
      >
        {text}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  caption: {
    fontSize: fontSizes.caption,
    fontWeight: fontWeights.normal,
  },
});

export default Caption;
