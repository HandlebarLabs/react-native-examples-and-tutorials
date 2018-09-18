import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#007991',
    marginVertical: 10,
    paddingVertical: 10,
    marginHorizontal: 5,
  },
  text: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '600',
  },
});

class Btn extends React.Component {
  render() {
    const { onPress, text } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

export default Btn;
