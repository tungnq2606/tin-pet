import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {Text} from '../../../components';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {hScale, scale, wScale} from '../../../utils/resolutions';
import Feather from 'react-native-vector-icons/Feather';
import {fontSize} from '../../../constants';

const Header = () => {
  return (
    <View>
      <StatusBar hidden />
      <View style={styles.container}>
        <SimpleLineIcons name="reload" color="#000" size={scale(20)} />
        <Text size={fontSize.huge} black>{`Discover`}</Text>
        <Feather name="sliders" color="#000" size={scale(19)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: hScale(12),
    paddingHorizontal: wScale(12),
    alignItems: 'center',
  },
});

export default Header;
