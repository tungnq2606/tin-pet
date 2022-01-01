import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FastImage, Text} from '../../../components';
import {hScale, scale, wScale} from '../../../utils/resolutions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, fontSize} from '../../../constants';

const CardItem = item => {
  return (
    <View style={styles.container}>
      <FastImage
        source={{
          uri: 'https://cdn.pixabay.com/photo/2018/03/05/00/56/dog-3199733_960_720.jpg',
        }}
        style={styles.image}
      />
      <Text bold style={styles.title}>{`Husky`}</Text>
      <View style={styles.address}>
        <MaterialCommunityIcons
          name="map-marker"
          color={colors.system}
          size={scale(15)}
        />
        <Text size={fontSize.fontSize14}>{`102 Quang Trung, Go Vap`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: scale(150),
    alignItems: 'center',
    marginHorizontal: wScale(5),
    borderRadius: scale(20),
  },
  image: {
    width: scale(150),
    height: scale(120),
    borderTopEndRadius: scale(20),
    borderTopRight: scale(20),
  },
  address: {
    width: scale(150),
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    flexWrap: 'wrap',
    marginTop: hScale(5),
  },
  title: {
    marginTop: hScale(8),
  },
});

export default CardItem;
