import React from 'react';
import { View, Button } from 'react-native';

import * as Auth from '../api/auth';

class Feed extends React.Component {
  handleLikePress = () => {
    const { isLoggedIn } = this.props;

    if (isLoggedIn) {
      alert('liked');
    } else {
      this.props.navigation.navigate('InAppAuth');
    }
  }

  render() {
    return (
      <View>
        <Button
          title="Like"
          onPress={this.handleLikePress}
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
