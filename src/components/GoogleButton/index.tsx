import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import iconGoogle from '../../assets/icon-google.png';
import { size } from '../../theme/size';

const GoogleButton = () => {
  return (
    <TouchableOpacity style={styles.container}  onPress={() => {}}>
      <Image source={iconGoogle} resizeMode='contain' style={styles.icon} />
    </TouchableOpacity>
  );
};

export default GoogleButton;

const styles = StyleSheet.create({
  container: {
    width: size.SIZE_ICON_LOGIN,
    height: size.SIZE_ICON_LOGIN,
    marginHorizontal:10
  },
  icon:{
    width:"100%",
    height:"100%"
  }
});
