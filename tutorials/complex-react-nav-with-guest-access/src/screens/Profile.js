import React from 'react';
import { View } from 'react-native';

import Button from '../components/Button';
import * as Auth from '../api/auth';

class Profile extends React.Component {
  handleSignOutPress = () => {
    const { logOut } = this.props;
    logOut();
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          text="Sign Out"
          onPress={this.handleSignOutPress}
        />
      </View>
    );
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
