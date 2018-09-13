import React from 'react';
import { ActivityIndicator, SafeAreaView } from 'react-native';

import * as Auth from '../api/auth';

class Loading extends React.Component {
  componentDidMount() {
    this.handleAuthNav();
  }

  componentDidUpdate() {
    this.handleAuthNav();
  }

  handleAuthNav = () => {
    const { navigation, isLoggedIn, checkedAuth } = this.props;
    if (!checkedAuth) return;

    if (isLoggedIn) {
      navigation.navigate('App');
    } else {
      navigation.navigate('LoggedOut');
    }
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }
}

export default props => (
  <Auth.Consumer>
    {({ isLoggedIn, checkedAuth }) => (
      <Loading
        {...props}
        isLoggedIn={isLoggedIn}
        checkedAuth={checkedAuth}
      />
    )}
  </Auth.Consumer>
);
