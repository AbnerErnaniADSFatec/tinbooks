import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

import leitora from '../assets/leitora.jpeg';
import nora from '../assets/noraroberts.jpeg';
import john from '../assets/johngreen.jpg';
import malala from '../assets/malala.jpeg';
import meg from '../assets/megcabot.jpg';
import stephen from '../assets/stephenking.jpeg';
import julia from '../assets/juliaquinn.jpg';
import joe from '../assets/joehill.jpg';
import tolkien from '../assets/jrrtolkien.jpg';
import lisa from '../assets/lisakleypas.jpg';
import michelle from '../assets/michelleobama.jpg';

export default function Main({ navigation }) {
  var images_cad = [julia, joe, tolkien, lisa, michelle, stephen, nora, malala];
  var images_rec = [tolkien, stephen, julia, joe, lisa, michelle, nora, malala];
  var likes = [];
  var dislikes = [];
  try {
    likes = navigation.state.params.likes_books;
  } catch (e) {}
  try {
    dislikes = navigation.state.params.dislikes_books;
  } catch (e) {}

  var books_likes = [];
  for(let i = 0; i < likes.length; i++){
    try {
      books_likes.push(<Image style={styles.foto2} source={ likes[i].image } />);
    } catch (e) {}
  }

  var books_rec = [];
  for(let i = 0; i < images_rec.length; i++){
		books_rec.push(<Image style={styles.foto2} source={ images_rec[i] } />);
  }

  var books_cad = [];
  for(let i = 0; i < images_cad.length; i++){
		books_cad.push(<Image style={styles.foto2} source={ images_cad[i] } />);
  }

  var verify = [];
  if (likes.length !== 0) {
    verify.push(<Text style={styles.livros}>Favoritos:</Text>);
  } else {
    verify.push(<Text style={styles.livros}>Sem favoritos</Text>);
  }

  function handleLivro() {
    navigation.navigate('Livros');
  }

  function handleSair() {
    navigation.navigate('Login');
  }

  function handleBuscar() {
    navigation.navigate('Buscar', { like : likes, dislike : dislikes });
  }

  return (
    <SafeAreaView
      style={styles.container}>
      <ScrollView>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Image style={styles.foto} source={leitora} />
            <View style={styles.footer}>
              <Text style={styles.name}>Vanessa Alencar</Text>
              <Text style={styles.bio}>Adoro livros de Romances, Biografias e Suspenses</Text>
              <Text style={styles.livros}>Livros cadastrados:</Text>
              <ScrollView horizontal={true}>
                { books_cad }
              </ScrollView>
            </View>
            <Text style={styles.livros}>Recomendados:</Text>
            <ScrollView horizontal={true}>
              { books_rec }
            </ScrollView>
            { verify }
            <ScrollView horizontal={true}>
              { books_likes }
            </ScrollView>
            <TouchableOpacity onPress={handleLivro} style={styles.button}>
              <Text style={styles.buttonText}>Cadastrar Livros</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleBuscar} style={styles.button}>
              <Text style={styles.buttonText}>Buscar Livros</Text>
            </TouchableOpacity>
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

  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
    alignSelf: 'center'
  },

  bio: {
    fontSize: 15,
    alignSelf: 'center'
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

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
  },

  livros: {
    fontSize: 20,
    marginTop: 10,
  }
});
