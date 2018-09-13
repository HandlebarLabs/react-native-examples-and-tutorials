import React from 'react';
import { View } from 'react-native';

import Input from '../components/Input';
import Button from '../components/Button';
import { signIn } from '../util/auth';

class SignIn extends React.Component {
  static defaultProps = {
    isInAppAuth: false,
  };

  handleSignInPress = () => {
    const { isInAppAuth, navigation } = this.props;

    signIn();
    if (isInAppAuth) {
      navigation.goBack(null); // close modal
    } else {
      navigation.navigate('App');
    }
  };

  handleSignUpPress = () => {
    this.props.navigation.navigate('SignUp');
  };

  handleBrowsePress = () => {
    this.props.navigation.navigate('App');
  };

  render() {
    const { isInAppAuth } = this.props;

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
        {!isInAppAuth && (
          <Button
            text="Browse"
            theme="CLEAR"
            size="small"
            onPress={this.handleBrowsePress}
          />
        )}
      </View>
    );
  }
}

export default SignIn;
