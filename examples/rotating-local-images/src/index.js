import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerImage: {
    width: '100%',
  },
});

const BANNER_ADS = [
  {
    name: 'Cat',
    path: require('./images/1.jpg'),
    // path: './images/1.jpg',
  },
  {
    name: 'Plant',
    path: require('./images/2.jpg'),
    // path: './images/2.jpg',
  },
  {
    name: 'Dog',
    path: require('./images/3.jpg'),
    // path: './images/3.jpg',
  },
];

const getRandomIndex = () => Math.floor(
  Math.random() * BANNER_ADS.length,
);

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImageIndex: getRandomIndex(),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.displayRandomBannerAd();
    }, 4000);
  }

  displayRandomBannerAd = () => {
    this.setState({
      currentImageIndex: getRandomIndex(),
    });
  };

  render() {
    if (BANNER_ADS.length > 0) {
      return (
        <View style={styles.container}>
          <Image
            style={styles.bannerImage}
            source={BANNER_ADS[this.state.currentImageIndex].path}
            // source={require(BANNER_ADS[this.state.currentImageIndex].path)} // This doesn't work
            resizeMode="contain"
          />
          <Text>{BANNER_ADS[this.state.currentImageIndex].name}</Text>
        </View>
      );
    }

    return null;
  }
}
