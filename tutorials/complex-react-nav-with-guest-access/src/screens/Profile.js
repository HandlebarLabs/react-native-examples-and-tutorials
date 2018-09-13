import React from 'react';
import { View, Text } from 'react-native';

import Button from '../components/Button';
import { signOut, isSignedIn } from '../util/auth';

class Profile extends React.Component {
  state = {
    isLoggedIn: false,
    checkedIfLoggedIn: false,
  };

  componentDidMount() {
    isSignedIn()
      .then((authed) => {
        this.setState({
          checkedIfLoggedIn: true,
          isLoggedIn: authed,
        });
      });
  }

  handleSignOutPress = () => {
    signOut();
    this.props.navigation.navigate('LoggedOut');
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
    const { checkedIfLoggedIn, isLoggedIn } = this.state;

    if (!checkedIfLoggedIn) {
      return null;
    }

    if (isLoggedIn) {
      return this.renderLoggedIn();
    }

    return this.renderLoggedOut();
  }
}

export default Profile;
