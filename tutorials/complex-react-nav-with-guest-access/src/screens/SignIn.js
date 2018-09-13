import React from 'react';
import { View } from 'react-native';

import Input from '../components/Input';
import Button from '../components/Button';

class SignIn extends React.Component {
  handleSignInPress = () => {
    this.props.navigation.navigate('AppTabs');
  };

  handleSignUpPress = () => {
    this.props.navigation.navigate('SignUp');
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
        <Button
          text="Sign In"
          theme="PRIMARY"
          size="large"
          onPress={this.handleSignInPress}
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

export default SignIn;
