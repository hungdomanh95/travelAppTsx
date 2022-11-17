import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import avatar from '../../assets/avatar.png';
const HeaderLeftHome = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={avatar} style={styles.avatar} />
      <Text style={styles.textName}>Kino.dev</Text>
    </TouchableOpacity>
  );
};

export default HeaderLeftHome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F9',
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  avatar: {
    width: 36,
    height: 36,
    marginRight: 8,
  },
  textName: {
    color: '#1B1E28',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16,
  },
});
