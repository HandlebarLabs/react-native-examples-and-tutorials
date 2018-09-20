import React from 'react';
import { View, SafeAreaView } from 'react-native';

import Input from '../components/Input';
import Button from '../components/Button';
import * as Auth from '../api/auth';

class SignIn extends React.Component {
  static defaultProps = {
    isInAppAuth: false,
  };

  handleSignInPress = () => {
    const { isInAppAuth, navigation, logIn } = this.props;

    logIn();
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
    {({ logIn }) => (
      <SignIn
        {...props}
        logIn={logIn}
      />
    )}
  </Auth.Consumer>
);
