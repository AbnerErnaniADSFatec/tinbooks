import React from 'react';
import { ScrollView, View, Platform, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import book_img from '../assets/book_img.jpeg';

export default function Livros({ navigation }) {
    var u = navigation.state.params.user;
    var users = navigation.state.params.saved_users;
    var list_books = navigation.state.params.books;
    var book = {
        id: null,
        image: book_img,
        title: '',
        bio: ''
    };

    handleTitle = (text) => {
        book.title = text;
    }

    handleBio = (text) => {
        book.bio = text;
    }

    function handleConfirma() {
        book.id = (list_books[(list_books.length - 1)].id + 1);
        list_books.push(book);
        navigation.navigate('Main', { user: u, saved_users: users, books: list_books });
    }

    function handleSair() {
        navigation.navigate('Login', { user: u, saved_users: users, books: list_books });
    }

    return (
        <ScrollView
            behavior='padding'
            enable={Platform.OS == 'ios'}
            style={styles.container}>
            <TextInput
                placeholder="Nome do Autor"
                style={styles.input} />
            <TextInput
                placeholder="ISBN"
                style={styles.input} />
            <TextInput
                placeholder="Título"
                style={styles.input}
                onChangeText = { handleTitle } />
            <TextInput
                placeholder="Sinopse"
                style={styles.input}
                onChangeText = { handleBio } />
            <TextInput
                placeholder="Série"
                style={styles.input} />
            <TextInput
                placeholder="Volume"
                style={styles.input} />
            <TextInput
                placeholder="Editora"
                style={styles.input} />
            <TextInput
                placeholder="Páginas"
                style={styles.input} />
            <TextInput
                placeholder="Ano de Publicação"
                style={styles.input} />
            <TextInput
                placeholder="Idioma"
                style={styles.input} />
            <TextInput
                placeholder="Genêro"
                style={styles.input} />
            <TouchableOpacity onPress={handleConfirma} style={styles.button}>
                <Text style={styles.buttonText}>Confirmar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSair} style={styles.button}>
                <Text style={styles.buttonText}>Sair</Text>
            </TouchableOpacity>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#AEEDE2',
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
    },

    texto: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf: 'center',
        fontFamily: 'Arial'
    }
});
