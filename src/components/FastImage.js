import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import RNFastImage from 'react-native-fast-image';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../constants';
import { scale } from '../utils/resolutions';

const FastImage = ({style, ...rest}) => {
  const [isError, setError] = useState(false);

  const onError = () => {
    if (!isError) {
      setError(true);
    }
  };

  if (isError) {
    return (
      <View style={[styles.error, style]}>
        <MCIcons
          name="image-remove"
          color={colors.systemGray}
          size={scale(24)}
        />
      </View>
    );
  }
  return <RNFastImage {...rest} {...{style}} onError={onError} />;
};

const styles = StyleSheet.create({
  error: {
    backgroundColor: colors.systemGray3,
  },
});

export default React.memo(FastImage);
