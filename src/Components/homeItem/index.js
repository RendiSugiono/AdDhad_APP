import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const HomeItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.ctnIcon}>
          <Icon name="book-open" size={30} color="#ffffff" />
          <Text style={styles.text}>
            AD - <Text style={styles.title}>DHAD</Text>
          </Text>
        </View>
        <Icon
          name="question-circle"
          size={24}
          color="#ffffff"
          style={styles.icon}
        />
      </View>
      <Text style={styles.subTitle}>الأفعال اليومية للمبتدئين والمتوسطين</Text>
    </View>
  );
};

export default HomeItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#181059',
    height: 197,
    paddingTop: 35,
    paddingLeft: 25,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  ctnIcon: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 15,
  },
  title: {
    color: '#C9FA05',
  },
  icon: {
    paddingRight: 15,
    alignItems: 'center',
  },
  subTitle: {
    color: '#ffffff',
    alignSelf: 'center',
    paddingBottom: 60,
    fontSize: 16,
  },
});
