import React from 'react';
import { FlatList } from 'react-native';

import * as Auth from '../api/auth';
import { getPhotos } from '../api/photos';

import Image from '../components/Image';

class Feed extends React.Component {
  state = {
    items: [],
    loading: false,
  };

  componentDidMount() {
    getPhotos()
      .then((results) => {
        this.setState({
          loading: false,
          items: results.items,
        });
      });
  }

  // handleLikePress = () => {
  //   const { isLoggedIn } = this.props;

  //   if (isLoggedIn) {
  //     alert('liked');
  //   } else {
  //     this.props.navigation.navigate('InAppAuth');
  //   }
  // }

  renderItem = ({ item }) => {
    return (
      <Image
        uri={item.imageUri}
        username={item.username}
        description={item.description}
      />
    );
  };

  render() {
    const { items, loading } = this.state;

    if (loading) return null;

    return (
      <FlatList
        data={items}
        renderItem={this.renderItem}
        keyExtractor={item => item._id}
      />
    );
  }
}

export default props => (
  <Auth.Consumer>
    {({ isLoggedIn }) => (
      <Feed
        {...props}
        isLoggedIn={isLoggedIn}
      />
    )}
  </Auth.Consumer>
);
