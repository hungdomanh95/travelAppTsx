/* eslint-disable react-native/no-inline-styles */
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {LIST_BOTTOM_TAB} from '../utils/data';
import {width} from '../theme/size';
import ShadowView from '../components/ShadowView/ShadowView';

// type BottomTabProps = BottomTabScreenProps<IBottomTabParamList>;

const BottomTab = ({state, navigation}: BottomTabBarProps) => {
  return (
    <ShadowView width={width} height={98} borderRadius={30}>
      <View style={styles.container}>
        {LIST_BOTTOM_TAB.map((item, index) => {
          const isFocused = state.index === index;
          const onPress = () => {
            navigation.navigate(`${item.name}`);
          };
          return (
            <TouchableOpacity
              onPress={onPress}
              key={index}
              style={styles.containerTouch}>
              <Image
                source={isFocused ? item.imageActive : item.image}
                style={styles.iconBottomTab}
              />
              <Text
                style={[
                  {color: isFocused ? '#0D6EFD' : '#222'},
                  styles.textBottomTab,
                ]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ShadowView>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 98,
    borderRadius: 0,
  },
  containerTouch: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (width - 40) / 5,
    height: '80%',
  },
  iconBottomTab: {
    width: 24,
    height: 24,
  },
  textBottomTab: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: '500',
  },
});
