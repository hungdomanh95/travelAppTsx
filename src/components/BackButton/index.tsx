import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {FunctionComponent} from 'react';
import backIcon from '../../assets/arrow.png';
import {size} from '../../theme/size';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {IRootStackParamList} from '../../navigation/RootStack';

type BackButtonProps = StackNavigationProp<IRootStackParamList>;

const BackButton: FunctionComponent = () => {
  const navigation = useNavigation<BackButtonProps>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.goBack()}>
      <Image source={backIcon} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(27,30,40,0.16)',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: size.SIZE_BTN_HEADER,
    height: size.SIZE_BTN_HEADER,
  },
  icon: {
    width: size.SIZE_ICON_HEADER,
    height: size.SIZE_ICON_HEADER,
  },
});
