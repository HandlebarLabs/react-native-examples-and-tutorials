import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback  } from 'react-native';

const styles = StyleSheet.create({
  alertContainer: {
    backgroundColor: '#fafbfc',
    paddingHorizontal: 20,
    paddingVertical: 60,
  },
  top: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e4e8',
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: '#e1e4e8',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  modal: {
    backgroundColor: '#fafbfc',
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
  },
  body: {
    fontSize: 16,
  },
});

const AlertContext = React.createContext({});

export const AlertConsumer = AlertContext.Consumer;

const initialState = {
  visible: false,
  title: '',
  body: '',
};

export class AlertProvider extends React.Component {
  state = initialState

  alert = ({
    title = '',
    body = '',
    display = 'bottom', // top, modal
    ctaText = '',
    ctaOnPress = null
  }) => {
    // alert('alert');
    this.setState({ title, body, visible: true, display });
  };

  close = () => {
    this.setState({ ...initialState });
  }

  render() {
    const { title, body, visible, display } = this.state;

    const containerStyles = [styles.alertContainer];

    if (display === 'bottom') {
      containerStyles.push(styles.bottom);
    } else if (display === 'top') {
      containerStyles.push(styles.top);
    }

    return (
      <AlertConsumer.Provider value={{ alert: this.alert }}>
        {this.props.children}
        {visible && display === 'modal' && (
          <TouchableWithoutFeedback onPress={this.close}>
            <View style={styles.modalContainer}>
              <View style={styles.modal}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.body}>{body}</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
        {visible && display !== 'modal' && (
          <View style={containerStyles}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.body}>{body}</Text>
          </View>
        )}
      </AlertConsumer.Provider>
    );
  }
}
