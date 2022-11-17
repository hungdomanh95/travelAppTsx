import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
import {width} from '../../../theme/size';
import {StackScreenProps} from '@react-navigation/stack';
import {IRootStackParamList} from '../../../navigation/RootStack';
type ShowImageProps = StackScreenProps<IRootStackParamList, 'ShowImage'>;
const ShowImage = ({route}: ShowImageProps) => {
  return (
    <View style={styles.container}>
      <Image source={route.params.image} resizeMode="contain" style={{width}} />
    </View>
  );
};

export default ShowImage;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
