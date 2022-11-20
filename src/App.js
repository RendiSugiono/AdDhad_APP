import {StyleSheet, View, StatusBar} from 'react-native';
import React from 'react';
import Home from './Screens/Home';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'default'} backgroundColor="#181059" />
      <Home />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
