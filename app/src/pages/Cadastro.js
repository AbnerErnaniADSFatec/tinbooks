import React from 'react';
import { Alert, ScrollView, Platform, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import logo from '../assets/logo.png';
import profile from '../assets/profile.png';

export default function Cadastro({ navigation }) {
    var u = navigation.state.params.user;
    var users = navigation.state.params.saved_users;
    var list_books = navigation.state.params.books;
    var user = {
        name: '',
        image: profile,
        username: '',
        bio: '',
        password: '',
        location: {
            lat: null,
            long: null
        },
        likes: [],
        dislikes: []
    };
    var confirm = '';

    handleName = (text) => {
        user.name = text;
    }

    handleUsername = (text) => {
        user.username = text;
    }

    handleBio = (text) => {
        user.bio = text;
    }

    handlePassword = (text) => {
        user.password = text;
    }

    handleConfirmPassword = (text) => {
        confirm = text;
    }

    function handleConfirma() {
        var verify = false;
        for (var i = 0; i < saved_users.length; i++) {
            if ( user.password == saved_users[i].password ) {
                verify = verify | true;
                break;
            } else {
                verify = verify | false;
            }
        }
        if (verify) {
            Alert.alert(
                'Escolha outra senha'
            );
        } else if ( confirm === user.password ) {
            u = user;
            users.push(u);
            navigation.navigate('Localizacao', { user: u, saved_users: users, books: list_books });
        } else {
            Alert.alert(
                'Senhas não conferem'
            );
        }
    }

    function handleSair() {
        navigation.navigate('Login', { user: u, saved_users: users, books: list_books });
    }

    return (
        <ScrollView
            behavior='padding'
            enable={Platform.OS == 'ios'}
            style={styles.container}>
            <Image source={logo} />
            <TextInput
                placeholder="Nome Completo "
                style={styles.input}
                onChangeText = { handleName } />
            <TextInput
                placeholder="Data de Nascimento"
                style={styles.input}/>
            <TextInput
                placeholder="Sexo"
                style={styles.input} />
            <TextInput
                placeholder="Nome de usuário "
                style={styles.input}
                onChangeText = { handleUsername } />
            <TextInput
                placeholder="E-mail"
                style={styles.input} />
            <TextInput
                placeholder="Senha"
                style={styles.input}
                onChangeText = { handlePassword }/>
            <TextInput
                placeholder="Confirmar Senha"
                style={styles.input} 
                onChangeText = { handleConfirmPassword } />
            <TextInput
                placeholder="Genêros de Interesse"
                style={styles.input}
                onChangeText = { handleBio } />
            <TouchableOpacity onPress={handleConfirma} style={styles.button}>
                <Text style={styles.buttonText}>Confirmar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPree={handleSair} style={styles.button}>
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
