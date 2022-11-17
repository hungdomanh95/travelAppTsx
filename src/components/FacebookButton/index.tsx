

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import iconFacebook from '../../assets/icon-fb.png';
import { size } from '../../theme/size';

const FacebookButton = () => {
  return (
    <TouchableOpacity style={styles.container}  onPress={() => {}}>
      <Image source={iconFacebook} resizeMode='contain' style={styles.icon} />
    </TouchableOpacity>
  );
};

export default FacebookButton;

const styles = StyleSheet.create({
  container: {
    width: size.SIZE_ICON_LOGIN,
    height: size.SIZE_ICON_LOGIN,
    marginHorizontal:10
  },  icon:{
    width:"100%",
    height:"100%"
  }
});
