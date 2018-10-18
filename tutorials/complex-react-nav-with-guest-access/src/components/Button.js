import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#007991',
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 3,
  },
  containerClear: {
    backgroundColor: 'transparent',
    marginVertical: 5,
  },
  text: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '600',
    fontSize: 16,
    padding: 15,
  },
  textClear: {
    color: '#007991',
    paddingVertical: 5,
  },
});

class Btn extends React.Component {
  static defaultProps = {
    theme: 'default',
  };

  render() {
    const { onPress, text, theme } = this.props;
    const containerStyles = [styles.container];
    const textStyles = [styles.text];

    if (theme === 'clear') {
      containerStyles.push(styles.containerClear);
      textStyles.push(styles.textClear);
    }

    return (
      <TouchableOpacity onPress={onPress} style={containerStyles}>
        <Text style={textStyles}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

export default Btn;
