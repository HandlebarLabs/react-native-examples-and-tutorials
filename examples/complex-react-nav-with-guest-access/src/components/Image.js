import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Animated,
  Text,
} from 'react-native';

import DoubleTap from './DoubleTap';

const w = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  iconRow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    paddingTop: 15,
    paddingHorizontal: 15,
  },
  heartIcon: {
    width: 20,
    height: 20,
  },
  overlay: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  overlayHeart: {
    tintColor: '#fff',
  },
  headerRow: {
    paddingHorizontal: 15,
    flex: 1,
    paddingVertical: 10,
  },
  usernameText: {
    fontWeight: 'bold',
  },
  descriptionText: {

  },
  description: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

export default class AppImage extends React.Component {
  state = {
    liked: this.props.liked,
  };

  animatedValue = new Animated.Value(0);

  toggleLike = () => {
    this.setState((state) => {
      const newLiked = !state.liked;

      if (newLiked) {
        Animated.sequence([
          Animated.spring(this.animatedValue, { toValue: 1 }),
          Animated.spring(this.animatedValue, { toValue: 0 }),
        ]).start();
      }

      return { liked: newLiked };
    });
  }

  renderOverlay = () => {
    const imageStyles = [
      styles.overlayHeart,
      {
        opacity: this.animatedValue,
        transform: [
          {
            scale: this.animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [0.7, 1.5],
            }),
          },
        ],
      },
    ];

    return (
      <View style={styles.overlay}>
        <Animated.Image
          source={require('../images/heart.png')}
          style={imageStyles}
        />
      </View>
    );
  }

  render() {
    const { uri, username, description } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <Text style={styles.usernameText}>{username}</Text>
        </View>
        <DoubleTap onDoubleTap={this.toggleLike}>
          <View>
            <Image
              source={{ uri: `${uri}&w={w.width}` }}
              style={{ width: w.width, height: w.width }}
              resizeMode="cover"
            />
            {this.renderOverlay()}
          </View>
        </DoubleTap>
        <View style={styles.iconRow}>
          <TouchableOpacity onPress={this.toggleLike}>
            <Image
              source={this.state.liked ? require('../images/heart.png') : require('../images/heart-outline.png')}
              style={styles.heartIcon}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>
            <Text style={styles.usernameText}>{username}</Text>
            {' '}
            {description}
          </Text>
        </View>
      </View>
    );
  }
}
