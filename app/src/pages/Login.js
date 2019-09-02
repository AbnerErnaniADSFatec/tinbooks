import React from 'react';
import { KeyboardAvoidingView, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function Login({ navigation }) {
    function handleLogin() {
        navigation.navigate('Main');
    }
    return (
        <KeyboardAvoidingView style = {styles.container}>
            <Text style = {styles.title}>Tinbooks</Text>
            <TextInput
                placeholder = "E-mail"
                placeholderTextColor = "#999999"
                style = {styles.input}
            />
            <TextInput
                placeholder = "Senha"
                placeholderTextColor = "#999999"
                secureTextEntry = { true }
                underlineColorAndroid = 'transparent'
                style = {styles.input}
            />
            <TouchableOpacity onPress = { handleLogin } style = {styles.button}>
                <Text style = {styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    // title: {
    //     color: '#1e87f5',
    //     fontSize: '50px'
    // },
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    input: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#DDDDDD',
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 15
    },
    button: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#2381df',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16
    }
});