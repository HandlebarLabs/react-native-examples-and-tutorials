import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

import DoubleTap from './DoubleTap';

const w = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconRow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  heartIcon: {
    width: 20,
    height: 20,
  },
});

export default class App extends React.Component {
  state = {
    liked: false,
  };

  toggleLike = () => this.setState(state => ({ liked: !state.liked }));

  render() {
    return (
      <View style={styles.container}>
        <DoubleTap onDoubleTap={this.toggleLike}>
          <Image
            source={{ uri: `https://images.pexels.com/photos/671557/pexels-photo-671557.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=${w.width}` }}
            style={{ width: w.width, height: w.width }}
            resizeMode="cover"
          />
        </DoubleTap>
        <View style={styles.iconRow}>
          <TouchableOpacity onPress={this.toggleLike}>
            <Image
              source={this.state.liked ? require('./images/heart.png') : require('./images/heart-outline.png')}
              style={styles.heartIcon}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
