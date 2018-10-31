import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { AlertProvider, AlertConsumer } from './GlobalAlerts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button
          title="Press Me"
          onPress={() => this.props.alert({
            title: 'Title',
            body: 'This body text',
            display: 'top', // bottom, top, modal
            // display: 'modal',
            ctaText: 'Confirm',
            ctaOnPress: () => alert('pressed cta')
          })}
        />
      </View>
    );
  }
}

export default () => (
  <AlertProvider>
    <AlertConsumer>
      {({ alert }) => <App alert={alert} />}
    </AlertConsumer>
  </AlertProvider>
);
