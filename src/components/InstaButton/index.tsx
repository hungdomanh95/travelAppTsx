import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import iconInsta from '../../assets/icon-insta.png';
import {size} from '../../theme/size';

const InstaButton = () => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => {}}>
      <Image source={iconInsta} resizeMode="contain" style={styles.icon} />
    </TouchableOpacity>
  );
};

export default InstaButton;

const styles = StyleSheet.create({
  container: {
    width: size.SIZE_ICON_LOGIN,
    height: size.SIZE_ICON_LOGIN,
    marginHorizontal: 10,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
});
