import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import firebase from 'firebase';
import database from '../config';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
    };
  }

  signup = (email, senha) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then(() => {
        this.props.navigation.replace('BottomTab');
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.secondcontainer}>
          <Text style={styles.titlestyle}>Tela de Login</Text>
          <Text style={styles.subtitlestyle}>Bem vindo ao nails!</Text>
          <TextInput
            placeholder="Email/usuário"
            value={this.state.email}
            onChangeText={(text) => {
              this.setState({ email: text });
            }}
            style={styles.inputstyle}></TextInput>
          <TextInput
            placeholder="Senha"
            value={this.state.senha}
            onChangeText={(text) => {
              this.setState({ senha: text });
            }}
            style={styles.inputstyle}></TextInput>
          <TouchableOpacity
            onPress={() => {
              this.signup(this.state.email, this.state.senha);
            }}
            style={styles.opacitystyle}>
            <Text style={styles.buttontext}>Entrar!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Registro');
            }}>
            <Text>Não está registrado ainda? Clique aqui</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4E1',
  },

  titlestyle: {
    fontSize: 40,
    color: '#FF1493',
    marginTop: 25,
  },

  subtitlestyle: {
    fontSize: 25,
    color: '#FF1493',
    marginTop: 25,
  },

  inputstyle: {
    width: '60%',
    height: 55,
    padding: 10,
    backgroundColor: '#FF1493',
    borderRadius: 15,
    fontSize: 15,
    marginTop: 20,
  },

  opacitystyle: {
    backgroundColor: '#DC143C',
    width: '60%',
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 15,
    justifyContent: 'center',
  },

  secondcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttontext: {
    textAlign: 'center',
  },
});