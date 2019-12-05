import React from 'react';
import {Alert, KeyboardAvoidingView, Platform, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';

import logo from '../assets/logo.png';
import nora from '../assets/noraroberts.jpeg';
import stephen from '../assets/stephenking.jpeg';

export default function Login({navigation}) {
  var u = {
    name: null,
    bio: null,
    username: '',
    password: '',
    likes: [],
    dislikes: []
  }
  var users = [
    {
      username: 'binao',
      password: '123',
      likes: [
        {
          id: 2,
          image: stephen,
          title: 'IT - A coisa',
          bio: 'Um grupo de crianças se une para investigar o misterioso desaparecimento de vários jovens em sua cidade. Eles descobrem que o culpado é Pennywise, um palhaço cruel que se alimenta de seus medos e cuja violência teve origem há vários séculos.'
        }
      ],
      dislikes: []
    },
    {
      username: 'tabata',
      password: '1234',
      likes: [
        {
          id: 3,
          image: nora,
          title: 'Uma sombra do Passado',
          bio: 'Novo romance de um dos maiores fenômenos editoriais da história. Há muitos anos, Fiona Bristow foi a única vítima que escapou das garras do Assassino da Echarpe Vermelha, o serial killer que matou seu noivo e seu amado cão. Após o trauma, ela escolhe reconstruir sua vida em uma ilha no noroeste do Pacífico, trabalhando como adestradora e voluntária na unidade canina de busca e resgate local.'
        }
      ],
      dislikes: []
    }
  ];

  handleUsername = (text) => {
    u.username = text;
  }

  handlePassword = (text) => {
    u.password = text;
  }

  function handleLogin() {
    var verify = false;
    for (var i = 0; i < users.length; i++) {
      if (users[i].username === u.username & users[i].password === u.password) {
        verify = verify | true;
        u = users[i];
        break;
      } else {
        verify = verify | false;
      }
    }
    if (verify) {
      navigation.navigate('Localizacao', { user: u, like: u.likes, dislike: u.dislikes });
    } else {
      Alert.alert(
        'Usuário não cadastrado'
      );
    }
  }

  function handleCadastro() {
    navigation.navigate('Cadastro');
  }

  return (
    <KeyboardAvoidingView 
      behavior = 'padding'
      enable = {Platform.OS == 'ios'}
      style = {styles.container}
    >
      <Image source = {logo} />
      <TextInput
        autoCapitalize = 'none'
        autoCorrect = {false}
        placeholder = "Login" 
        style={styles.input}
        onChangeText = { handleUsername }
      />
      <TextInput
        placeholder = "Senha"
        secureTextEntry = {true}
        style = {styles.input}
        onChangeText = { handlePassword }
      />
      <TouchableOpacity onPress={handleLogin} style = {styles.button}>
        <Text style = {styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCadastro} style = {styles.button}>
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
    backgroundColor: '#5DBCD2',
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
