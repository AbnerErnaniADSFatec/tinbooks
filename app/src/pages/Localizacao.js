import React from 'react';
import { KeyboardAvoidingView, Platform, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

export default function Login({navigation}) {
  var u = navigation.state.params.user;
  var users = navigation.state.params.saved_users;
  var list_books = navigation.state.params.books;
  var error = null;

  function handleLogin() {
    Geolocation.getCurrentPosition(
      async (position) => {
        u.location.lat = await position.coords.latitude;
        u.location.long =  await position.coords.longitude;
      },
      async (error) => error = await error.message,
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
    );
    navigation.navigate('Main', { user: u, saved_users: users, books: list_books });
  }

  return (
    <KeyboardAvoidingView 
      behavior = 'padding'
      enable = {Platform.OS == 'ios'}
      style = {styles.container}>
      <TouchableOpacity onPress={handleLogin} style = {styles.button}>
        <Text style = {styles.buttonText}>Ativar Localização</Text>
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