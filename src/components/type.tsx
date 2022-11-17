import {GestureResponderEvent} from 'react-native';

export interface IPressButton {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}
