import React from 'react';
import { View } from 'react-native';

import Button from '../components/Button';

class Profile extends React.Component {
  handleSignOutPress = () => {
    this.props.navigation.navigate('AuthStack');
  }

  render() {
    return (
      <View>
        <Button
          text="Sign Out"
          theme="PRIMARY"
          size="large"
          onPress={this.handleSignOutPress}
        />
      </View>
    );
  }
}

export default Profile;
