import React from 'react';
import { View, SafeAreaView } from 'react-native';

import Input from '../components/Input';
import Button from '../components/Button';
import * as Auth from '../api/auth';

class SignIn extends React.Component {
  handleSignInPress = () => {
    const { logIn } = this.props;

    logIn()
      .then(() => {
        alert('route to the correct screen');
      });
  };

  handleSignUpPress = () => {
    this.props.navigation.navigate('SignUp');
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
          <Button
            text="Sign In"
            onPress={this.handleSignInPress}
          />
          <Button
            text="New? Create an Account"
            theme="clear"
            onPress={this.handleSignUpPress}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default props => (
  <Auth.Consumer>
    {({ logIn }) => (
      <SignIn
        {...props}
        logIn={logIn}
      />
    )}
  </Auth.Consumer>
);
