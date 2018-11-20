import React from 'react';
import { View, SafeAreaView } from 'react-native';

import Input from '../components/Input';
import Button from '../components/Button';
import * as Auth from '../api/auth';

class SignUp extends React.Component {
  handleSignUpPress = () => {
    const { createAccount } = this.props;
    createAccount()
      .then(() => {
        alert('go to correct screen');
      });
  };

  render() {
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
