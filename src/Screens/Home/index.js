import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeItem from '../../Components/homeItem';
import Header from '../../Components/header';

const index = () => {
  return (
    <View>
      <HomeItem />
      <Header />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
