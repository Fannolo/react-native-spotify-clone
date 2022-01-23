import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from 'rnplayer/utils/colors';
import { fontSizes, fontWeights } from 'rnplayer/utils/consants';

interface CaptionProps {
  text: string;
  color?: string;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
}

const Caption = ({ text, color, fontWeight }: CaptionProps) => {
  return (
    <View>
      <Text
        style={[
          styles.caption,
          { color: color ? color : colors.dark.gray },
          { fontWeight: fontWeight ? fontWeight : fontWeight },
        ]}
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
