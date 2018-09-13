import React from 'react';
import { Button } from 'react-native';

class Btn extends React.Component {
  render() {
    const { onPress, text } = this.props;
    return (
      <Button
        onPress={onPress}
        title={text}
      />
    );
  }
}

export default Btn;
