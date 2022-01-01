import React from 'react';
import {FlatList, View} from 'react-native';
import {wScale} from '../../utils/resolutions';
import CardItem from './components/CardItem';
import Header from './components/Header';

const DiscoverScreen = () => {
  const keyExtractor = index => `${index}`;
  const renderItem = ({item}) => <CardItem item={item} />;
  return (
    <View>
      <Header />
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={{
          alignItems: 'center',
        }}
      />
    </View>
  );
};

export default DiscoverScreen;
