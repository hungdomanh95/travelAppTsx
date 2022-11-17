import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import React, {FunctionComponent, ReactNode} from 'react';

interface IViewProps {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}

const Container: FunctionComponent<IViewProps> = props => {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
});
