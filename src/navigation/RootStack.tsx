import React, {FunctionComponent} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeSection from '../screens/Welcome/WelcomeSection';
import RootTab from './RootTab';
import DetailCard from '../screens/Home/DetailCard';
import BackButton from '../components/BackButton';
import BookmarkButton from '../components/BookmarkButton';
import {ImageSourcePropType} from 'react-native';
import ShowImage from '../screens/Home/DetailCard/ShowImage';
import Login from '../screens/Login';
import Register from '../screens/Register';

export type IRootStackParamList = {
  Welcome: undefined;
  RootTab: undefined;
  Login: undefined;
  Register: undefined;
  DetailCard: {
    id: number;
  };
  ShowImage: {
    image: ImageSourcePropType;
  };
};

const Stack = createStackNavigator<IRootStackParamList>();

const RootStack: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
          headerTransparent: true,
          headerRightContainerStyle: {
            paddingRight: 20,
          },
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
        }}>
        <Stack.Screen name="Welcome" component={WelcomeSection} />
        <Stack.Screen name="RootTab" component={RootTab} />
        <Stack.Screen
          name="DetailCard"
          component={DetailCard}
          options={{
            headerShown: true,
            headerBackTitle: '',
            headerTitle: '',
            headerLeft: () => <BackButton />,
            headerRight: () => <BookmarkButton />,
          }}
        />
        <Stack.Screen
          name="ShowImage"
          component={ShowImage}
          options={{
            headerShown: true,
            headerBackTitle: '',
            headerTitle: '',
            headerLeft: () => <BackButton />,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTransparent: false,
            headerShadowVisible: false,
            headerShown: true,
            headerBackTitle: '',
            headerTitle: '',
            headerLeft: () => <BackButton />,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerTransparent: false,
            headerShadowVisible: false,
            headerShown: true,
            headerBackTitle: '',
            headerTitle: '',
            headerLeft: () => <BackButton />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
