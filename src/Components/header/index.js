import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat Datang</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    marginTop: -25,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 600,
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
});
