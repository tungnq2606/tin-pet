import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '../../components';

const LoginScreen = () => {
  return (
    <View>
      <Text>{`Login screen`}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default LoginScreen;
