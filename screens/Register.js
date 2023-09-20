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

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      sobrenome: '',
      email: '',
      senha: '',
      confirmarsenha: '',
    };
  }

  register = (nome, sobrenome, email, senha, confirmarsenha) => {
    if (
      nome !== '' &&
      sobrenome !== '' &&
      email !== '' &&
      senha !== '' &&
      confirmarsenha !== ''
    ) {
      if (senha == confirmarsenha) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, senha)
          .then((userCredential) => {
            Alert.alert('Usuário cadastrado com sucesso!');
            this.props.navigation.replace('Login');
            firebase
              .database()
              .ref('/users/' + userCredential.user.uid)
              .set({
                email: userCredential.user.email,
                nome: nome,
                sobrenome: sobrenome,
              });
          })
          .catch((error) => {
            Alert.alert(error.message);
          });
      }
    } else {
      Alert.alert('Todos os campos são obrigatórios');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.secondcontainer}>
          <Text style={styles.title}>Tela de Registro</Text>
          <TextInput
            placeholder="Nome"
            style={styles.inputstyle}
            value={this.state.nome}
            onChangeText={(text) => {
              this.setState({ nome: text });
            }}></TextInput>
          <TextInput
            placeholder="Sobrenome"
            style={styles.inputstyle}
            value={this.state.sobrenome}
            onChangeText={(text) => {
              this.setState({ sobrenome: text });
            }}></TextInput>
          <TextInput
            placeholder="Email"
            style={styles.inputstyle}
            value={this.state.email}
            onChangeText={(text) => {
              this.setState({ email: text });
            }}></TextInput>
          <TextInput
            placeholder="Senha"
            style={styles.inputstyle}
            value={this.state.senha}
            onChangeText={(text) => {
              this.setState({ senha: text });
            }}></TextInput>
          <TextInput
            placeholder="Confirmar senha"
            style={styles.inputstyle}
            value={this.state.confirmarsenha}
            onChangeText={(text) => {
              this.setState({ confirmarsenha: text });
            }}></TextInput>
          <TouchableOpacity
            style={styles.opacitystyle}
            onPress={() =>
              this.register(
                this.state.nome,
                this.state.sobrenome,
                this.state.email,
                this.state.senha,
                this.state.confirmarsenha
              )
            }>
            <Text style={styles.buttontext}>Registrar!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text>Voltar para login</Text>
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

  inputstyle: {
    width: '60%',
    height: 55,
    padding: 10,
    backgroundColor: '#FF1493',
    borderRadius: 15,
    fontSize: 15,
    marginTop: 10,
  },

  opacitystyle: {
    backgroundColor: '#DC143C',
    width: '60%',
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5,
    justifyContent: 'center',
  },

  secondcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttontext: {
    textAlign: 'center',
  },

  title: {
    fontSize: 40,
    color: '#FF1493',
  },
});