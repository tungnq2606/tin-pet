import React from 'react';
import {Text as RNText, StyleSheet} from 'react-native';

import {colors, fontSize} from '../constants';

const Text = ({bold, black, medium, style, children, color, size, ...rest}) => {
  return (
    <RNText
      style={[
        {
          color: color || colors.black,
          fontSize: size || fontSize.normal,
        },
        black
          ? styles.black
          : bold
          ? styles.bold
          : medium
          ? styles.medium
          : styles.regular,
        style,
      ]}
      {...rest}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  regular: {
    fontFamily: 'SanFranciscoText-Regular',
  },
  bold: {
    fontFamily: 'SanFranciscoText-Bold',
  },
  black: {
    fontFamily: 'SanFranciscoText-Semibold',
  },
  medium: {
    fontFamily: 'SanFranciscoText-Medium',
  },
});

export default React.memo(Text);
