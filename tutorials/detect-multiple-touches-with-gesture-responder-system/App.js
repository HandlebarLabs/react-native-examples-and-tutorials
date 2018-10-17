import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: '#cc0000',
    width: 200,
    height: 200,
    borderRadius: 5,
  },
});

class MultiTap extends React.Component {
  static defaultProps = {
    onPress: () => null,
    numberOfTouches: 2,
  };

  onStartShouldSetResponder = (evt) => {
    if (evt.nativeEvent.touches.length === this.props.numberOfTouches) {
      return true;
    }

    return false;
  };

  onResponderRelease = () => {
    this.props.onPress();
  };

  render() {
    return (
      <View
        onStartShouldSetResponder={this.onStartShouldSetResponder}
        onResponderRelease={this.onResponderRelease}
      >
        {this.props.children}
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MultiTap onPress={() => alert('double tap!')} numberOfTouches={1}>
          <TouchableHighlight onPress={() => alert('box tapped!')}>
            <View style={styles.box} />
          </TouchableHighlight>
        </MultiTap>
      </View>
    );
  }
}
