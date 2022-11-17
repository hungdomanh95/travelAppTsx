import {View, Text, StyleSheet} from 'react-native';
import React, {FunctionComponent} from 'react';

const Intro: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Travenor</Text>
    </View>
  );
};

export default Intro;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0D6EFD',
  },
  text: {
    fontSize: 36,
    lineHeight: 40,
    fontWeight: '400',
    fontFamily: 'Geometric415BT-BlackA',
    color: '#FFFFFF',
  },
});
