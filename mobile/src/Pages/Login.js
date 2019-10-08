import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, AsyncStorage, Platform, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import api from '../services/api';
import logo from '../assets/logo.png';

export default function Login({ navigation }) {

    //useEffect é uma função que é executada sempre que entrar na tela ou quando a variável estiver preenchida, e se a variável mudar de valor, ele executa novamente...
    useEffect(()=>{
        AsyncStorage.getItem('user').then(user => {
            if(user){
                //console.log(user);
                return navigation.navigate('List');
             }
        });
    },[/*Aqui vai uma variável para monitorar*/]);

    const [ email, setEmail ] = useState('');
    const [ techs, setTechs ] = useState('');

    async function handleSubmit(){
        //email, techs
        //console.log(email, techs);
        const response = await api.post('/session', {email});
        const { _id } = response.data;

        //Armazenando no Banco SQLite
        await AsyncStorage.setItem('user', _id);
        await AsyncStorage.setItem('techs', techs);

        return navigation.navigate('List');

    }

    return (
        <KeyboardAvoidingView enabled={Platform.OS == 'ios'} style={styles.container}>
            <Image source={logo} />

            <View style={styles.form}>

                <Text style={styles.label}>Seu E-mail</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Seu e-mail"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={email}
                    onChangeText= { text => setEmail(text) }
                ></TextInput>

                <Text style={styles.label}>Tecnologias</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Tecnologias de interesse"
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                    value={techs}
                    onChangeText = { setTechs }
                ></TextInput>

                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.textButton}> Buscar Spots </Text>
                </TouchableOpacity>

            </View>

        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    form: {
        // AlignSelf para ele ocupar todo o espaçamento
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
    },
    
    label: {
         fontWeight: 'bold',
         color: '#444',
         marginBottom: 8
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },

    button: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2
    },

    textButton: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
});
