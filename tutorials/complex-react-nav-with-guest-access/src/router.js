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

const AuthStack = createStackNavigator({
  SignIn: {
    screen: SignIn,
  },
  SignUp: {
    screen: SignUp,
  },
});

const FeedStack = createStackNavigator({
  Feed: {
    screen: Feed,
  },
});

const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile,
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

const AppNavigator = createSwitchNavigator({
  Loading: {
    screen: Loading,
  },
  AuthStack: {
    screen: AuthStack,
  },
  AppTabs: {
    screen: AppTabs,
  },
});

export default AppNavigator;
