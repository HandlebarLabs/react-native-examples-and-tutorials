import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Button,
  Animated,
  Dimensions,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

const w = Dimensions.get('window');

const styles = StyleSheet.create({
  alertContainer: {
    backgroundColor: '#fafbfc',
    paddingHorizontal: 20,
    paddingVertical: 10,
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

export const AlertContext = React.createContext({});

export const AlertConsumer = AlertContext.Consumer;

const initialState = {
  visible: false,
  title: '',
  body: '',
  ctaOnPress: null,
  ctaText: '',
  contentHeight: w.height,
  theme: null,
};

export class AlertProvider extends React.Component {
  state = initialState;

  animatedValue = new Animated.Value(0);

  alert = ({
    title = '',
    body = '',
    display = 'bottom', // top, modal
    ctaText = '',
    ctaOnPress = null,
    theme = null,
  }) => {
    // alert('alert');
    this.setState({
      title,
      body,
      visible: true,
      display,
      ctaText,
      ctaOnPress,
      theme,
    }, () => {
      Animated.timing(this.animatedValue, {
        toValue: 1,
        useNativeDriver: true,
        duration: 150,
      }).start();
    });
  };

  close = () => {
    Animated.timing(this.animatedValue, {
      toValue: 0,
      useNativeDriver: true,
      duration: 150,
    }).start(() => {
      this.setState({ ...initialState });
    });
  }

  onLayout = ({ nativeEvent }) => {
    const height = nativeEvent.layout.height;
    this.setState({ contentHeight: height });
  }

  getCustomStyles = () => {
    const { customStyles } = this.props;
    const { theme } = this.state;

    const container = [];
    const text = [];

    if (theme) {
      const themeStyles = customStyles[theme];
      container.push(themeStyles.container);
      text.push(themeStyles.text);
    }

    return { container, text };
  }

  renderBody = () => {
    const {
      title,
      body,
      ctaText,
      ctaOnPress,
    } = this.state;

    const titleStyles = [styles.text];
    const bodyStyles = [styles.body];

    const { text } = this.getCustomStyles();

    titleStyles.push(text);
    bodyStyles.push(text);

    return (
      <React.Fragment>
        <Text style={titleStyles}>{title}</Text>
        <Text style={bodyStyles}>{body}</Text>
        {ctaOnPress && (
          <Button
            title={ctaText}
            onPress={() => {
              ctaOnPress();
              this.close();
            }}
          />
        )}
      </React.Fragment>
    );
  }

  renderModal = () => {
    const modalStyles = [styles.modal, {
      opacity: this.animatedValue,
      transform: [
        {
          scale: this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0.5, 1],
          }),
        },
      ],
    }];

    return (
      <TouchableWithoutFeedback onPress={this.close}>
        <View style={styles.modalContainer}>
          <Animated.View style={modalStyles}>
            {this.renderBody()}
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  renderNotModal = () => {
    const { display, contentHeight } = this.state;

    const forceInset = {};
    const containerStyles = [styles.alertContainer];

    if (display === 'bottom') {
      containerStyles.push(styles.bottom);
      containerStyles.push({
        transform: [
          {
            translateY: this.animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [contentHeight, 0],
            }),
          },
        ],
      });
      forceInset.bottom = 'always';
    } else if (display === 'top') {
      containerStyles.push(styles.top);
      containerStyles.push({
        transform: [
          {
            translateY: this.animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [-contentHeight, 0],
            }),
          },
        ],
      });
      forceInset.top = 'always';
    }

    const { container } = this.getCustomStyles();
    containerStyles.push(container);

    return (
      <Animated.View style={containerStyles} onLayout={this.onLayout}>
        <TouchableWithoutFeedback onPress={this.close}>
          <SafeAreaView forceInset={forceInset}>
            {this.renderBody()}
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </Animated.View>
    );
  }

  render() {
    const { visible, display } = this.state;

    return (
      <AlertContext.Provider value={{ alert: this.alert }}>
        {this.props.children}
        {visible && display === 'modal' && this.renderModal()}
        {visible && display !== 'modal' && this.renderNotModal()}
      </AlertContext.Provider>
    );
  }
}
