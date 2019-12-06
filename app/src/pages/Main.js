import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function Main({ navigation }) {
  var u = navigation.state.params.user;
  var users = navigation.state.params.saved_users;
  var list_books = navigation.state.params.books;
  var images_cad = list_books;
  function shuffle(array) {
    var m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }
  var images_rec = shuffle(list_books);
  var books_likes = [];
  for(let i = 0; i < u.likes.length; i++){
    books_likes.push(
      <TouchableOpacity onPress={
        () => setBook(u.likes[i])
      }>
        <Image style={styles.foto2} source={ u.likes[i].image } />
      </TouchableOpacity>
    );
  }
  var books_rec = [];
  for(let i = 0; i < images_rec.length; i++){
		books_rec.push(
      <TouchableOpacity onPress={
        () => setBook(images_rec[i])
      }>
        <Image style={styles.foto2} source={ images_rec[i].image } />
      </TouchableOpacity>
    );
  }
  var books_cad = [];
  for(let i = 0; i < images_cad.length; i++){
		books_cad.push(
      <TouchableOpacity onPress={
        () => setBook(images_cad[i])
      }>
        <Image style={styles.foto2} source={ images_cad[i].image } />
      </TouchableOpacity>
    );
  }
  var verify = [];
  if (u.likes.length !== 0) {
    verify.push(<Text style={styles.livros}>Favoritos:</Text>);
  } else {
    verify.push(<Text style={styles.livros}>Sem favoritos</Text>);
  }

  function handleSair() {
    navigation.navigate('Login');
  }

  function handleLivro() {
    navigation.navigate('Livros', { user: u, saved_users: users, books: list_books });
  }

  function handleBuscar() {
    navigation.navigate('Buscar', { user: u, saved_users: users, books: list_books });
  }

  function setBook(book) {
    navigation.navigate('Buscar', { user: u, saved_users: users, books: list_books, select: book });
  }

  return (
    <SafeAreaView
      style={styles.container}>
      <ScrollView>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Image style={styles.foto} source={ u.image } />
            <View style={styles.footer}>
              <Text style={styles.name}>{ u.name }</Text>
              <Text style={styles.bio}>{ u.bio }</Text>
              <Text style={styles.bio}>lat: { u.location.lat } e long: { u.location.long }</Text>
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
