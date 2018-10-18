import React from 'react';
import {
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator,
} from 'react-navigation';

import Feed from './screens/Feed';
import Loading from './screens/Loading';
import Profile from './screens/Profile';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';

// Logged In
const FeedStack = createStackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      headerTitle: 'Feed',
    },
  },
});

const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      headerTitle: 'Profile',
    },
  },
});

const AppTabs = createBottomTabNavigator({
  Feed: {
    screen: FeedStack,
  },
  Profile: {
    screen: ProfileStack,
  },
});

const InAppAuthStack = createStackNavigator({
  SignIn: {
    screen: props => <SignIn {...props} isInAppAuth />,
    navigationOptions: {
      headerTitle: 'Sign In',
    },
  },
  SignUp: {
    screen: props => <SignUp {...props} isInAppAuth />,
    navigationOptions: {
      headerTitle: 'Sign Up',
    },
  },
});

const AppStack = createStackNavigator({
  Tabs: {
    screen: AppTabs,
  },
  InAppAuth: {
    screen: InAppAuthStack,
  },
}, {
  headerMode: 'none',
  mode: 'modal',
});

// Logged Out
const AuthStack = createStackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      headerTitle: 'Sign In',
    },
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      headerTitle: 'Sign Up',
    },
  },
});

// Main Navigator
const AppNavigator = createSwitchNavigator({
  Loading: {
    screen: Loading,
  },
  LoggedOut: {
    screen: AuthStack,
  },
  App: {
    screen: AppStack,
  },
});

export default AppNavigator;
