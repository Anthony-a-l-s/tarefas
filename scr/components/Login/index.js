
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

import firebase from '../../services/firebaseConnection';



export default function Login({ changeStatus }) {

    const [type, setType] = useState('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function handleLogin() {
        if (type === 'login') {
            const user = firebase.auth().signInWithEmailAndPassword(email, password)
                .then((user) => {
                    changeStatus(user.user.uid)
                })
                .catch((err) => {
                    console.log(err);
                    alert('erro');
                    return;
                })

        } else {
            const user = firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((user) => {
                    changeStatus(user.user.uid)
                })
                .catch((err) => {
                    console.log(err);
                    alert('erro');
                    return;
                })
        }

    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                placeholder='Seu email'
                style={styles.input}
                value={email}
                onChangeText={(text) => setEmail(text)}
            />

            <TextInput
                placeholder='************'
                style={styles.input}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />

            <TouchableOpacity onPress={handleLogin}
                style={[styles.btnLogin, { backgroundColor: type == 'login' ? '#3ea6f2' : '#141414' }]}>
                <Text style={styles.loginText}>
                    {type === 'login' ? 'Acessar' : 'Cadastrar'}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setType(type => type === 'login' ? 'cadastrar' : 'login')}>
                <Text style={{ textAlign: 'center' }}>
                    {type === 'login' ? 'Criar uma conta' : 'já possuo uma conta'}
                </Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#f2f6fc',
        paddingHorizontal: 10,
    },

    input: {
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 4,
        height: 45,
        padding: 10,
        borderWidth: 1,
        borderColor: '#141414'
    },

    btnLogin: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        marginBottom: 10
    },

    loginText: {
        color: '#fff',
        fontSize: 17,
    }
});

