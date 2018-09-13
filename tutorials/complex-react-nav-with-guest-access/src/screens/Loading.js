import React from 'react';
import { ActivityIndicator, SafeAreaView } from 'react-native';

import { isSignedIn } from '../util/auth';

class Loading extends React.Component {
  componentDidMount() {
    isSignedIn()
      .then(authed => this.handleAuthNav(authed))
      .catch(() => this.handleAuthNav(false));
  }

  handleAuthNav = (authed) => {
    const { navigation } = this.props;
    if (authed) {
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

export default Loading;
