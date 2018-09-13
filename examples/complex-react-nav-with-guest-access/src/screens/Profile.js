import React from 'react';
import { View, Text } from 'react-native';

import Button from '../components/Button';
import * as Auth from '../api/auth';

class Profile extends React.Component {
  handleSignOutPress = () => {
    const { logOut, navigation } = this.props;
    logOut();
    navigation.navigate('LoggedOut');
  }

  handleSignIn = () => {
    this.props.navigation.navigate('InAppAuth');
  }

  renderLoggedOut = () => (
    <View>
      <Text>Log in to view this page</Text>
      <Button
        text="Sign In"
        theme="PRIMARY"
        size="large"
        onPress={this.handleSignIn}
      />
    </View>
  );

  renderLoggedIn = () => (
    <View>
      <Button
        text="Sign Out"
        theme="PRIMARY"
        size="large"
        onPress={this.handleSignOutPress}
      />
    </View>
  );

  render() {
    const { isLoggedIn } = this.props;

    if (isLoggedIn) {
      return this.renderLoggedIn();
    }

    return this.renderLoggedOut();
  }
}

export default props => (
  <Auth.Consumer>
    {({ logOut, isLoggedIn }) => (
      <Profile
        {...props}
        logOut={logOut}
        isLoggedIn={isLoggedIn}
      />
    )}
  </Auth.Consumer>
);
