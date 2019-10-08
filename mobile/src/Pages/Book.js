import React, { useState } from 'react';
import { SafeAreaView, Alert, StyleSheet, TextInput, TouchableOpacity, AsyncStorage, Text } from 'react-native';
import api from '../services/api';

export default function Login({ navigation }) {
  
  const [date, setDate] = useState('');
  const id = navigation.getParam('id');


  async function handleSubmit() {
    try {
      const user_id = await AsyncStorage.getItem('user');

      const response = await api.post(`/spots/${id}/bookings`, {
        date
      }, {
        headers: { user_id }
      })

      Alert.alert('Solicitação enviada');
      navigation.navigate('List');
    } catch (error) {
      Alert.alert('Error, porém recebi tais dados');
    }

  }

  function handleCancel() {
    navigation.navigate('List');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Data de interesse</Text>
      <TextInput
        style={styles.input}
        placeholder="Qual data você deseja?"
        placeholderTextColor="#999"
        autoCapitalize="words"
        autoCorrect={false}
        value={date}
        onChangeText={setDate}
      ></TextInput>
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.textButton}> Solicitar Reserva </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCancel} style={[styles.button, styles.cancelButton]}>
        <Text style={styles.textButton}> Cancelar </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: 30
  },

  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
    paddingHorizontal: 10
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius: 2,
    paddingHorizontal: 30
  },

  button: {
    height: 42,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    paddingHorizontal: 30
  },

  cancelButton: {
    backgroundColor: '#ccc',
    marginTop: 10
  },

  textButton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});
