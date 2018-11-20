import React from 'react';
import { View } from 'react-native';

import * as Auth from '../api/auth';
import Button from '../components/Button';

class Feed extends React.Component {
  handleProtectedAction = () => {
    alert('authorized users only: protected action');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
    {() => (
      <Feed
        {...props}
      />
    )}
  </Auth.Consumer>
);
