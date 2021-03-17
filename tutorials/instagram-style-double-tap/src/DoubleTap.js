import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

export default class DoubleTap extends React.Component {
  static defaultProps = {
    delay: 300,
    onDoubleTap: () => null,
  };

  lastTap = null;

  // https://gist.github.com/brunotavares/3c9a373ba5cd1b4ff28b
  handleDoubleTap = () => {
    const now = Date.now();
    if (lastTap && now - lastTap < (this.props.delay || defaultProps.delay)) {
      this.props.onDoubleTap();
    } else {
      this.lastTap = now;
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.handleDoubleTap}>
        {this.props.children}
      </TouchableWithoutFeedback>
    );
  }
}
