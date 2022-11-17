import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import React, {FunctionComponent, ReactNode} from 'react';

interface IViewProps {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  justifyBetween?: boolean;
}

const RowView: FunctionComponent<IViewProps> = props => {
  return (
    <View
      style={[
        styles.container,
        props.justifyBetween && styles.justifyBetween,
        props.style,
      ]}>
      {props.children}
    </View>
  );
};

export default RowView;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
});
