import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

import like from '../assets/like.png';
import dislike from '../assets/dislike.png';

export default function Main({ navigation }) {
  var u = navigation.state.params.user;
  var users = navigation.state.params.saved_users;
  var saved = navigation.state.params.books;
  var id_likes = [];
  for (var i = 0; i < u.likes.length; i++) { id_likes.push(u.likes[i].id); }
  var id_dislikes = [];
  for (var i = 0; i < u.dislikes.length; i++) { id_dislikes.push(u.dislikes[i].id); }
  var ids = id_likes.concat(id_dislikes);
  function verifyContains(item, array) {
    var result = false;
    for (var i = 0; i < array.length; i++) {
      if (array[i] === item ) {
        result = result | true;
      } else {
        result = result | false;
      }
    }
    return result;
  }
  var list = saved.filter((value) => {
    return !verifyContains(value.id, ids);
  });
  var selected = {};
  if ( typeof navigation.state.params.select !== 'undefined') {
    selected = navigation.state.params.select;
  } else {
    selected = list[0];
  }
  var verify = [];
  try {
    verify.push(
      <View>
        <Image style={styles.foto} source={selected.image} />
        <View style={styles.footer}>
          <Text style={styles.name}>{selected.title}</Text>
          <Text style={styles.bio}>{selected.bio}</Text>
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
      </View>
    );
  } catch(e) {
    verify.push(
      <View style={styles.footer}>
        <Text style={styles.name}>Acabou!</Text>
      </View>
    );
  }

  function handleLike() {
    if ( !verifyContains(selected.id, id_likes) && !verifyContains(selected.id, id_dislikes) ) {
      u.likes.push(selected);
    } else if (verifyContains(selected.id, id_dislikes)) {
      u.dislikes = u.dislikes.filter((data) => {
          return data.id != selected.id;
      });
      u.likes.push(selected);
    }
    navigation.navigate('Main', { user: u, books: saved });
  }

  function handleDislike() {
    if ( !verifyContains(selected.id, id_dislikes) && !verifyContains(selected.id, id_likes) ) {
      dislikes.push(selected);
    } else if (verifyContains(selected.id, id_likes)) {
      u.likes = u.likes.filter((data) => {
          return data.id != selected.id;
      });
      dislikes.push(selected);
    }
    navigation.navigate('Main', { user: u, saved_users: users, books: list_books });
  }

  function handleVoltar() {
    navigation.navigate('Main', { user: u, saved_users: users, books: list_books });
  }

  function handleSair() {
    navigation.navigate('Login', { user: u, saved_users: users, books: list_books });
  }

  return (
    <SafeAreaView
      style={styles.container}>
      <ScrollView>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            {verify}
            <TouchableOpacity onPress={handleVoltar} style={styles.button}>
              <Text style={styles.buttonText}>Voltar</Text>
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

  like: {
    alignItems: 'center',
  }
});
