import React from 'react';
import {KeyboardAvoidingView, Platform, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import api from '../services/api';
import logo from '../assets/logo.png';

export default function Login({navigation}) {
  state = {
    username: '',
    password: ''
  }

  handleUsername = (text) => {
    this.setState({ username: text })
  }

  handlePassword = (text) => {
    this.setState({ password: text })
  }

  handleLogin = (username, password) => {
    const response = api.get('/find?user=' + username);
    // if (response) {}
    navigation.navigate('Main', { response });
  }

  function handleCadastro() {
    navigation.navigate('Cadastro');
  }

  return (
    <KeyboardAvoidingView 
      behavior = 'padding'
      enable = {Platform.OS == 'ios'}
      style = {styles.container}>
      <Image source = {logo} />
      <TextInput 
        autoCapitalize = 'none'
        autoCorrect = {false}
        placeholder = "Login"
        onChangeText = { this.handleUsername }
        style = {styles.input}
      />
      <TextInput
        placeholder = "Senha"
        secureTextEntry = {true}
        onChangeText = { this.handlePassword }
        style = {styles.input}
      />
      <TouchableOpacity onPress = {
        () => this.handleLogin(this.state.email, this.state.password)
      } style = {styles.button}
      >
        <Text style = {styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress = {handleCadastro} style = {styles.button}>
        <Text style = {styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AEEDE2',
    justifyContent: 'center',
  },

  input: {
    height: 46,
    width: 300,
    alignSelf: 'center',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    marginTop: 20,
    paddingHorizontal: 15,
  },

  button: {
    height: 46,
    width: 300,
    alignSelf: 'center',
    backgroundColor: '#b3c0d0',
    borderRadius: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
  }
});
