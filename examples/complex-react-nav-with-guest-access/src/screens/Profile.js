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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Log in to view this page</Text>
      <Button
        text="Sign In"
        onPress={this.handleSignIn}
      />
    </View>
  );

  renderLoggedIn = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        text="Sign Out"
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
