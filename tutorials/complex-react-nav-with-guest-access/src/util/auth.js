import { AsyncStorage } from 'react-native';

export const USER_KEY = 'auth-demo-key';

export const onSignIn = () => AsyncStorage.setItem(USER_KEY, 'true');

export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = () => new Promise((resolve) => {
  setTimeout(() => {
    AsyncStorage.getItem(USER_KEY)
      .then((res) => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(() => resolve(false));
  }, 300);
});
