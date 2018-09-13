import { AsyncStorage } from 'react-native';

export const USER_KEY = 'auth-demo-key';

export const onSignIn = () => AsyncStorage.setItem(USER_KEY, 'true');

export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = () => AsyncStorage.getItem(USER_KEY)
  .then((res) => {
    if (res !== null) {
      return true;
    }
    return false;
  });
