import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import React, {FunctionComponent, ReactNode} from 'react';
interface IShadowView {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  width: number | string;
  height?: number | string;
  borderRadius: number;
  styleChild?: StyleProp<ViewStyle>;
}

const ShadowView: FunctionComponent<IShadowView> = props => {
  const {width, height, children, borderRadius, style, styleChild} = props;
  return (
    <View style={[styles.itemShadow, {width, height}, style]}>
      <View style={[styles.itemSide, {borderRadius}, styleChild]}>
        {children}
      </View>
    </View>
  );
};

export default ShadowView;

const styles = StyleSheet.create({
  itemShadow: {
    backgroundColor: 'transparent',
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  itemSide: {
    // height:"100%",
    // padding:10,
    // paddingHorizontal: 14,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    elevation: 5,
    overflow: 'hidden',
  },
});
