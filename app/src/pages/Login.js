import React from 'react';
import {Alert, KeyboardAvoidingView, Platform, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';

import logo from '../assets/logo.png';
import nora from '../assets/noraroberts.jpeg';
import malala from '../assets/malala.jpeg';
import stephen from '../assets/stephenking.jpeg';
import harry from '../assets/harry.jpg';
import abner from '../assets/abner.jpg';
import tabata from '../assets/leitora.jpeg';

export default function Login({navigation}) {
  try {
    var users = navigation.state.params.saved_users;
  } catch(e) {
    var users = [
      {
        name: 'Abner Ernani dos Anjos',
        image: abner,
        username: 'binao',
        bio: 'Terror e Suspense',
        password: '123',
        location: {
          lat: null,
          long: null
        },
        likes: [
          {
            id: 3,
            image: stephen,
            title: 'IT - A coisa',
            bio: 'Um grupo de crianças se une para investigar o misterioso desaparecimento de vários jovens em sua cidade. Eles descobrem que o culpado é Pennywise, um palhaço cruel que se alimenta de seus medos e cuja violência teve origem há vários séculos.'
          }
        ],
        dislikes: []
      },
      {
        name: 'Tábata Glória',
        image: tabata,
        bio: 'Suspense, Romance e Biografia',
        username: 'tabata',
        password: '1234',
        location: {
          lat: null,
          long: null
        },
        likes: [
          {
            id: 2,
            image: nora,
            title: 'Uma sombra do Passado',
            bio: 'Novo romance de um dos maiores fenômenos editoriais da história. Há muitos anos, Fiona Bristow foi a única vítima que escapou das garras do Assassino da Echarpe Vermelha, o serial killer que matou seu noivo e seu amado cão. Após o trauma, ela escolhe reconstruir sua vida em uma ilha no noroeste do Pacífico, trabalhando como adestradora e voluntária na unidade canina de busca e resgate local.'
          }
        ],
        dislikes: []
      }
    ];
  }
  try {
    var list_books = navigation.state.params.books;
  } catch(e) {
    var list_books = [
      {
        id: 1,
        image: harry,
        title: 'Harry Potter e a Pedra Flosofal',
        bio: 'Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger.'
      },
      {
        id: 2,
        image: nora,
        title: 'Uma sombra do Passado',
        bio: 'Novo romance de um dos maiores fenômenos editoriais da história. Há muitos anos, Fiona Bristow foi a única vítima que escapou das garras do Assassino da Echarpe Vermelha, o serial killer que matou seu noivo e seu amado cão. Após o trauma, ela escolhe reconstruir sua vida em uma ilha no noroeste do Pacífico, trabalhando como adestradora e voluntária na unidade canina de busca e resgate local.'
      },
      {
        id: 3,
        image: stephen,
        title: 'IT - A coisa',
        bio: 'Um grupo de crianças se une para investigar o misterioso desaparecimento de vários jovens em sua cidade. Eles descobrem que o culpado é Pennywise, um palhaço cruel que se alimenta de seus medos e cuja violência teve origem há vários séculos.'
      },
      {
        id: 4,
        image: malala,
        title: 'Eu sou malala',
        bio: 'Eu sou Malala é a história de uma família exilada pelo terrorismo global, da luta pelo direito à educação feminina e dos obstáculos à valorização da mulher em uma sociedade que privilegia filhos homens. Quando o Talibã tomou controle do vale do Swat, uma menina levantou a voz. Malala Yousafzai recusou-se a permanecer em silêncio e lutou pelo seu direito à educação. Mas em 9 de outubro de 2012, uma terça-feira, ela quase pagou o preço com a vida.'
      }
    ];
  }
  var user = {
    username: '',
    password: ''
  };
  var u = {};

  handleUsername = (text) => {
    user.username = text;
  }

  handlePassword = (text) => {
    user.password = text;
  }

  function handleLogin() {
    var verify = false;
    for (var i = 0; i < users.length; i++) {
      if (users[i].username === user.username & users[i].password === user.password) {
        verify = verify | true;
        u = users[i];
        break;
      } else {
        verify = verify | false;
      }
    }
    if (verify) {
      navigation.navigate('Localizacao', { user: u, saved_users: users, books: list_books });
    } else {
      Alert.alert(
        'Usuário não cadastrado'
      );
    }
  }

  function handleCadastro() {
    navigation.navigate('Cadastro', { user: u, saved_users: users, books: list_books });
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
