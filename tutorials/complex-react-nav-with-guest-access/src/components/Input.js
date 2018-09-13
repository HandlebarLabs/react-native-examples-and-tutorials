import React from 'react';
import { Text, View, TextInput } from 'react-native';

class Input extends React.Component {
  render() {
    const { label, ...props } = this.props;
    return (
      <View>
        <Text>{label}</Text>
        <TextInput
          {...props}
        />
      </View>
    );
  }
}

export default Input;
