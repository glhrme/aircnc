import React, { useState, useEffect } from 'react';
import { View, AsyncStorage, Text, KeyboardAvoidingView, StyleSheet } from 'react-native';

export default function List() {

  const [ techs, setTechs ] = useState([]);

  useEffect(()=>{
    async function buscaTechs(){
      const storagedTechs = await AsyncStorage.getItem('techs');
      const techsArray = storagedTechs.split(',').map(tech => tech.trim());
      setTechs(techsArray);
    }
    buscaTechs();
  },[])

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text>{techs}</Text>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
