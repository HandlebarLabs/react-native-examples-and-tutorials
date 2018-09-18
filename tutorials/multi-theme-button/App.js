import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import Button from './Button';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Button
          text="Default"
          onPress={() => null}
        />
        <Button
          text="Default Outline"
          outline
          onPress={() => null}
        />
        <Button
          text="Secondary Large"
          size="large"
          theme="secondary"
          onPress={() => null}
        />
        <Button
          text="Secondary Small Disabled"
          size="small"
          theme="secondary"
          disabled
          onPress={() => null}
        />

      </SafeAreaView>
    );
  }
}
