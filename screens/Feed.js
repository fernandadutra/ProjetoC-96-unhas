import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
var tutoriais = require('./temp_tutorials.json');

export default class Feed extends Component {
  constructor() {
    super();
    this.state = {
      tutoriais: [],
    };
  }

  keyextractor = (item, index) => {
    index.toString();
  };

  renderitem = ({ item }) => {
    var images = {
      image_1: require('../assets/image_1.jpeg'),
      image_2: require('../assets/image_2.jpeg'),
      image_3: require('../assets/image_3.jpeg'),
      image_4: require('../assets/image_4.jpeg'),
      image_5: require('../assets/image_5.jpeg'),
      image_6: require('../assets/image_6.jpeg'),
      image_7: require('../assets/image_7.jpeg'),
      image_8: require('../assets/image_8.jpeg'),
      image_9: require('../assets/image_9.jpeg'),
      image_10: require('../assets/image_10.jpeg'),
      image_11: require('../assets/image_11.jpeg'),
      image_12: require('../assets/image_12.jpeg'),
    };
    return (
      <TouchableOpacity>
        <View style={styles.itemstyle}>
          <Image source={images[item.image]} style={styles.imagestyle}></Image>
          <Text style={styles.text}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    if (tutoriais == '') {
      return (
        <View style={styles.loadingcontainer}>
          <Text style={styles.text}>Carregando...</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Tela de Feed</Text>
          <FlatList
            data={tutoriais}
            renderItem={this.renderitem}
            keyExtractor={this.keyextractor}></FlatList>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4E1',
  },

  title: {
    fontSize: 20,
    color: '#FF1493',
    textAlign: 'center',
  },

  loadingcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFE4E1',
  },

  text: {
    color: '#FF1493',
    textAlign: 'center',
    marginVertical: 25,
  },

  itemstyle: {
    flexDirection: 'row',
    marginLeft: 12,
  },

  imagestyle: {
    width: 50,
    height: 50,
    marginTop: 10,
    marginRight: 20,
  },
});