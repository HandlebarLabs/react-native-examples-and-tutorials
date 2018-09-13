import { AsyncStorage } from 'react-native';

export const USER_KEY = 'auth-demo-key';

export const signIn = () => AsyncStorage.setItem(USER_KEY, 'true');
export const signUp = () => AsyncStorage.setItem(USER_KEY, 'true');
export const signOut = () => AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = () => AsyncStorage.getItem(USER_KEY)
  .then((res) => {
    if (res !== null) {
      return true;
    }
    return false;
  });
