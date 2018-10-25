import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 5,
    borderColor: '#4cfcf3',
    marginBottom: 20,
  },
  nameText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <View style={styles.container}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{ uri: 'https://randomuser.me/api/portraits/lego/5.jpg' }}
          />
          <Text style={styles.nameText}>John Doe</Text>
          <Text style={styles.nameText}>John Doe</Text>
        </View>
      </React.Fragment>
    );
  }
}
