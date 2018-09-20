import React from 'react';
import { View, SafeAreaView } from 'react-native';

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
      <SafeAreaView style={{ flex: 1, justifyContent: 'space-between', marginTop: 20 }}>
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
            onPress={this.handleSignUpPress}
          />
        </View>
        {!isInAppAuth && (
          <Button
            text="Browse"
            onPress={this.handleBrowsePress}
          />
        )}
      </SafeAreaView>
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
