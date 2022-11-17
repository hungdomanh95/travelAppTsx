/* eslint-disable react-native/no-inline-styles */
import {
  View,
  FlatList,
  StatusBar,
  Animated,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import React, {FunctionComponent, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import onboard1 from '../../assets/onboard1.png';
import onboard2 from '../../assets/onboard2.jpeg';
import onboard3 from '../../assets/onboard3.jpeg';
import WelcomeItem from './WelcomeItem';
import {width} from '../../theme/size';
import Button from '../../components/Button';
import {StackNavigationProp} from '@react-navigation/stack';
import {IRootStackParamList} from '../../navigation/RootStack';

const LIST_ONBOARD = [
  {
    id: 1,
    photo: onboard1,
    title: 'Life is short and the world is ',
    hightlight: 'wide',
    content:
      'At Friends tours and travel, we customize reliable and trutworthy educational tours to destinations all over the world',
  },
  {
    id: 2,
    photo: onboard2,
    title: 'It’s a big world out there go ',
    hightlight: 'explore',
    content:
      'To get the best of your adventure you just need to leave and go where you like. we are waiting for you',
  },
  {
    id: 3,
    photo: onboard3,
    title: 'People don’t take trips, trips take ',
    hightlight: 'people',
    content:
      'To get the best of your adventure you just need to leave and go where you like. we are waiting for you',
  },
];
type NavigationProps = StackNavigationProp<IRootStackParamList>;
const WelcomeSection: FunctionComponent = () => {
  const navigation = useNavigation<NavigationProps>();

  const scrollX = useRef(new Animated.Value(0)).current;

  const scrollRef = useRef<FlatList>(null);

  const [indexWelcome, setIndexWelCome] = useState(0);

  const Indicator = ({item}: any) => (
    <View style={styles.containerDot}>
      {item.map((itemDot: any, index: number) => {
        const inputRange: number[] = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: [
            'rgba(38, 121, 241, 0.25)',
            '#2679F1',
            'rgba(38, 121, 241, 0.25)',
          ],
          extrapolate: 'clamp',
        });

        const widthDot = scrollX.interpolate({
          inputRange,
          outputRange: [7, 35, 7],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={index}
            style={[styles.dot, {backgroundColor, width: widthDot}]}
          />
        );
      })}
    </View>
  );

  const changeViewWelcome = (): void => {
    if (indexWelcome < LIST_ONBOARD.length - 1) {
      setIndexWelCome(indexWelcome + 1);
      scrollRef?.current?.scrollToIndex({
        animated: true,
        index: indexWelcome + 1,
      });
    } else if (indexWelcome === LIST_ONBOARD.length - 1) {
      // navigation.navigate('Home');
      handleSkipWelcome();
    }
  };
  const scrollToActiveIndex = (value: number): void => {
    if (value !== indexWelcome) {
      console.log('scrollToActiveIndex: ', value);
      setIndexWelCome(value);
    }
  };
  const handleSkipWelcome = () => {
    navigation.navigate('Login');
    // navigation.navigate('RootTab');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={{flex: 5}}>
        <FlatList
          ref={scrollRef}
          data={LIST_ONBOARD}
          horizontal={true}
          pagingEnabled={true}
          decelerationRate={0}
          showsHorizontalScrollIndicator={false}
          keyExtractor={({id}: any) => id.toString()}
          renderItem={({item}: any) => (
            <WelcomeItem onPress={handleSkipWelcome} {...item} />
          )}
          onMomentumScrollEnd={(
            e: NativeSyntheticEvent<NativeScrollEvent>,
          ): void => {
            scrollToActiveIndex(
              Math.floor(e.nativeEvent.contentOffset.x / width),
            );
          }}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
        />
      </View>
      <Indicator item={LIST_ONBOARD} />
      <View style={styles.bottomView}>
        <Button
          onPress={changeViewWelcome}
          content={indexWelcome > 0 ? 'Next' : 'Get Started'}
          textStyle={{fontWeight: '600'}}
        />
      </View>
    </View>
  );
};

export default WelcomeSection;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerDot: {
    flexDirection: 'row',
    width,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  dot: {
    width: 7,
    height: 7,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  bottomView: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
