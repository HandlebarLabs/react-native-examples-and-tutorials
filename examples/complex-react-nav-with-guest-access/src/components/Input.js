import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  label: {
    color: '#98989d',
    paddingHorizontal: 20,
    marginBottom: 5,
    marginTop: 10,
    fontSize: 16,
  },
  inputContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  input: {
    fontSize: 16,
    paddingVertical: 10,
  },
});

class Input extends React.Component {
  render() {
    const { label, ...props } = this.props;
    return (
      <React.Fragment>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            {...props}
          />
        </View>
      </React.Fragment>
    );
  }
}

export default Input;
