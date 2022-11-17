import {
  StyleSheet,
  Text,
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
  TouchableOpacity,
  TextStyle,
} from 'react-native';
import React, {FunctionComponent} from 'react';

interface IButtonProps {
  content: string;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

const Button: FunctionComponent<IButtonProps> = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.container, props.buttonStyle]}>
      <Text style={[styles.text, props.textStyle]}>{props.content}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: 335,
    height: 56,
    backgroundColor: '#0D6EFD',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 20,
  },
});
