import React from 'react';
import { View } from 'react-native';

import Input from '../components/Input';
import Button from '../components/Button';
import * as Auth from '../api/auth';

class SignUp extends React.Component {
  static defaultProps = {
    isInAppAuth: false,
  };

  handleSignUpPress = () => {
    const { isInAppAuth, navigation, createAccount } = this.props;
    createAccount();
    if (isInAppAuth) {
      navigation.popToTop(); // go to top of auth stack
      navigation.goBack(null); // close modal
    } else {
      navigation.navigate('App');
    }
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

export default props => (
  <Auth.Consumer>
    {({ createAccount }) => (
      <SignUp
        {...props}
        createAccount={createAccount}
      />
    )}
  </Auth.Consumer>
);
