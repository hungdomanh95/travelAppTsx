import React, {FunctionComponent} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTabComponent from './BottomTab';
import Home from '../screens/Home';
import Calendar from '../screens/Calendar';
import Messages from '../screens/Messages';
import Profile from '../screens/Profile';
import HeaderLeftHome from '../screens/Home/HeaderLeftHome';
import Search from '../screens/Search';
import NotificationButton from '../components/NotificationButton';
import BackButton from '../components/BackButton';

export type IBottomTabParamList = {
  Home: undefined;
  Calendar: undefined;
  Messages: undefined;
  Profile: undefined;
  Search: undefined;
};

const BottomTab = createBottomTabNavigator<IBottomTabParamList>();

const RootTab: FunctionComponent = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: {
          borderBottomWidth: 0,
          shadowColor: 'transparent',
          shadowOpacity: 0,
          elevation: 0,
        },
        headerRightContainerStyle: {
          paddingRight: 20,
        },
        headerLeftContainerStyle: {
          paddingLeft: 20,
        },
      }}
      tabBar={props => <BottomTabComponent {...props} />}
      initialRouteName="Home">
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => <HeaderLeftHome />,
          headerTitle: () => <></>,
          headerRight: () => <NotificationButton />,
        }}
      />
      <BottomTab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          headerLeft: () => <BackButton />,
          headerTitle: 'Schedule',
          headerRight: () => <NotificationButton />,
        }}
      />
      <BottomTab.Screen name="Search" component={Search} />
      <BottomTab.Screen name="Messages" component={Messages} />
      <BottomTab.Screen name="Profile" component={Profile} />
    </BottomTab.Navigator>
  );
};
export default RootTab;
