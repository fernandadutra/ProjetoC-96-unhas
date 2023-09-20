import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
var tutoriais = require('./temp_tutorials.json');

export default class Search extends Component {

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
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tela de Pesquisa</Text>
        <View style={styles.viewstyle}>
          <TextInput
            style={styles.inputstyle}
            placeholder={'O que deseja procurar?'}
            placeholderTextColor={'white'}></TextInput>
          <TouchableOpacity style={styles.opacitystyle}>
            <IonIcons name={'search'} size={20} color={'white'}></IonIcons>
          </TouchableOpacity>
</View>
 <FlatList
            data={tutoriais}
            renderItem={this.renderitem}
            keyExtractor={this.keyextractor}></FlatList>
      </View>
    );
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

  inputstyle: {
    width: '75%',
    height: 55,
    padding: 10,
    backgroundColor: '#FF1493',
    borderRadius: 15,
    fontSize: 15,
    marginTop: 20,
  },

  opacitystyle: {
    backgroundColor: '#DC143C',
    width: '20%',
    height: 55,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 15,
    justifyContent: 'center',
  },

  viewstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 5,
    marginRight: 5,
  },

  imagestyle: {
    width: 50,
    height: 50,
    marginTop: 10,
    marginRight: 20,
  },

  itemstyle: {
    flexDirection: 'row',
    marginLeft: 12,
  },

  text: {
    color: '#FF1493',
    textAlign: 'center',
    marginVertical: 25,
  },
});
