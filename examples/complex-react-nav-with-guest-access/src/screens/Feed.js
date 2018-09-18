import React from 'react';
import { View, Text } from 'react-native';

import * as Auth from '../api/auth';
import Button from '../components/Button';

class Feed extends React.Component {
  handleProtectedAction = () => {
    const { isLoggedIn } = this.props;

    if (isLoggedIn) {
      alert('do a protected thing');
    } else {
      this.props.navigation.navigate('InAppAuth');
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Feed</Text>
        <Button
          text="Protected Action"
          onPress={this.handleProtectedAction}
        />
      </View>
    );
  }
}

export default props => (
  <Auth.Consumer>
    {({ isLoggedIn }) => (
      <Feed
        {...props}
        isLoggedIn={isLoggedIn}
      />
    )}
  </Auth.Consumer>
);
