import React from 'react';
import { View, Button } from 'react-native';

import { isSignedIn } from '../util/auth';

class Feed extends React.Component {
  handleLikePress = () => {
    isSignedIn()
      .then((authed) => {
        if (authed) {
          alert('liked');
        } else {
          this.props.navigation.navigate('InAppAuth');
        }
      });
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

export default Feed;
