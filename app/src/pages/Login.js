import React from 'react';
import { KeyboardAvoidingView, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function Login() {
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
                style = {styles.input}
            />
            <TouchableOpacity style = {styles.button}>
                <Text style = {styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
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
        backgroundColor: '#DF4723',
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