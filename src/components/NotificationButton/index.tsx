import {
  StyleSheet,
  TouchableOpacity,
  Image,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React, {FunctionComponent} from 'react';
import iconNoti from '../../assets/icon-Noti.png';
import {size} from '../../theme/size';

interface IButtonProps {
  style?: StyleProp<ViewStyle>;
}

const NotificationButton: FunctionComponent<IButtonProps> = props => {
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={() => {}}>
      <Image source={iconNoti} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default NotificationButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F9',
    borderRadius: 50,
    flexDirection: 'row',
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
