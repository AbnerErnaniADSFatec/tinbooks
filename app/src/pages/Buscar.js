import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

import nora from '../assets/noraroberts.jpeg';
import malala from '../assets/malala.jpeg';
import stephen from '../assets/stephenking.jpeg';
import harry from '../assets/harry.jpg';
import like from '../assets/like.png';
import dislike from '../assets/dislike.png';

export default function Main({ navigation }) {
  var likes = [];
  var dislikes = [];
  var selected = {
    id: null,
    image: null,
    title: null,
    bio: null
  };
  var list = [
    {
      id: 4,
      image: harry,
      title: 'Harry Potter e a Pedra Flosofal',
      bio: 'Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger.'
    },
    {
      id: 3,
      image: nora,
      title: 'Uma sombra do Passado',
      bio: 'Novo romance de um dos maiores fenômenos editoriais da história. Há muitos anos, Fiona Bristow foi a única vítima que escapou das garras do Assassino da Echarpe Vermelha, o serial killer que matou seu noivo e seu amado cão. Após o trauma, ela escolhe reconstruir sua vida em uma ilha no noroeste do Pacífico, trabalhando como adestradora e voluntária na unidade canina de busca e resgate local.'
    },
    {
      id: 2,
      image: stephen,
      title: 'IT - A coisa',
      bio: 'Um grupo de crianças se une para investigar o misterioso desaparecimento de vários jovens em sua cidade. Eles descobrem que o culpado é Pennywise, um palhaço cruel que se alimenta de seus medos e cuja violência teve origem há vários séculos.'
    },
    {
      id: 1,
      image: malala,
      title: 'Eu sou malala',
      bio: 'Eu sou Malala é a história de uma família exilada pelo terrorismo global, da luta pelo direito à educação feminina e dos obstáculos à valorização da mulher em uma sociedade que privilegia filhos homens. Quando o Talibã tomou controle do vale do Swat, uma menina levantou a voz. Malala Yousafzai recusou-se a permanecer em silêncio e lutou pelo seu direito à educação. Mas em 9 de outubro de 2012, uma terça-feira, ela quase pagou o preço com a vida.'
    }
  ];

  try {
    likes = navigation.state.params.like;
  } catch (e) {}
  try {
    dislikes = navigation.state.params.dislike;
  } catch (e) {}

  if (likes.length === 0) {
    likes.push(list[0]);
    selected = list[0];
  } else {
    for (var i = 0; i < likes.length; i++) {
      if (likes[i].id !==  list[i].id) {
        selected = list[i]
        break;
      }
    }
  }

  function handleLike() {
    likes.push(selected);
    navigation.navigate('Main', { likes_books : likes });
  }

  function handleDislike() {
    dislikes.push(selected);
    navigation.navigate('Main', { dislikes_books : dislikes });
  }

  function handleSair() {
    navigation.navigate('Login');
  }

  return (
    <SafeAreaView
      style={styles.container}>
      <ScrollView>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Image style={styles.foto} source={ selected.image } />
            <View style={styles.footer}>
              <Text style={styles.name}>{ selected.title }</Text>
              <Text style={styles.bio}>{ selected.bio }</Text>
            </View>
            <View style={styles.like}>
            <ScrollView horizontal={true}>
            <TouchableOpacity onPress={handleDislike} style={styles.button2}>
                <Image style={styles.botao} source={dislike} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLike} style={styles.button2}>
                <Image style={styles.botao} source={like} />
            </TouchableOpacity>
            </ScrollView>
            </View>
            <TouchableOpacity onPress={handleSair} style={styles.button}>
              <Text style={styles.buttonText}>Sair</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AEEDE2',
    justifyContent: 'space-between',
  },

  foto: {
    height: 200,
    width: 200,
    alignSelf: 'center',
  },

  botao: {
    height: 50,
    width: 50,
    alignSelf: 'center',
  },

  name: {
    fontSize: 25,
    margin: 10,
    fontWeight: 'bold',
    color: '#FFF',
    alignSelf: 'center',
    alignItems: 'center',
  },

  bio: {
    fontSize: 17,
    alignSelf: 'center',
  },

  foto2: {
    height: 110,
    width: 100,
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

  button2: {
    height: 56,
    width: 80,
    alignSelf: 'center',
    backgroundColor: '#5DBCD2',
    borderRadius: 20,
    marginTop: 20,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },


  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
  },

  livros: {
    fontSize: 20,
    marginTop: 10,
  },

  like:{
    alignItems: 'center',
  }
});
