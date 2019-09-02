import React from 'react';
import { SafeAreaView, TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';
import coruja from '../assets/corujinea.png';

export default function Main() {
    return(
        <SafeAreaView style = {styles.container}>
            <Text style = {styles.title}>Tinbooks</Text>
            <View style = {styles.cardsContainer}>
                <View style = {styles.card}>
                    <Image style = {styles.avatar} source = {coruja}/>
                    <View styles = {styles.footer}>
                        <Text styles = {styles.name}>Corujínea</Text>
                        <Text styles = {styles.bio} numberOfLines = {3}>Ficção-Científica, Agatha Christie, Carl Sagan</Text>
                    </View>
                </View>
            </View>
            <View style = {styles.buttonsContainer}>
                <TouchableOpacity style = {styles.button}>
                    <Image src = {like}/>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.button}>
                    <Image src = {dislike}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        color: '#1e87f5',
        align: 'center',
        fontSize: '50px'
    },
    container: {
        flex: 1,
        backgroudColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cardsContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        maxHeight: 500
    },
    card: {
        borderWidth: 1,
        borderColor: '#dddddd',
        borderRadius: 8,
        margin: 30,
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        botton: 0
    },
    avatar: {
        flex: 1,
        height: 300
    },
    footer: {
        backgroudColor: '#FFFFFF',
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333'
    },
    bio: {
        fontSize: 14,
        color: '#999999',
        marginTop: 5,
        lineHeight: 18
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginBottom: 30
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroudColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        elevation: 2,
        shadowColor: '#000000',
        shadowOpacity: 0.05,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2
        }
    }
});