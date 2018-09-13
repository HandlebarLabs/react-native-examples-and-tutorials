import React from 'react';
import { View } from 'react-native';

import Input from '../components/Input';
import Button from '../components/Button';

class SignUp extends React.Component {
  handleSignUpPress = () => {
    this.props.navigation.navigate('AppTabs');
  };

  handleBrowsePress = () => {
    this.props.navigation.navigate('AppTabs');
  };

  render() {
    return (
      <View>
        <Input
          label="EMAIL"
          placeholder="john.doe@example.com"
        />
        <Input
          label="PASSWORD"
          placeholder="********"
        />
        <Input
          label="CONFIRM PASSWORD"
          placeholder="********"
        />
        <Button
          text="Sign Up"
          theme="SECONDARY"
          size="large"
          onPress={this.handleSignUpPress}
        />
        <Button
          text="Browse"
          theme="CLEAR"
          size="small"
          onPress={this.handleBrowsePress}
        />
      </View>
    );
  }
}

export default SignUp;
