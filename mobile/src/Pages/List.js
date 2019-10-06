import React, { useState, useEffect } from 'react';
import { SafeAreaView, AsyncStorage, Text, KeyboardAvoidingView, StyleSheet, Image } from 'react-native';

import SpotList from '../components/SpotList';

import logo from '../assets/logo.png';

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
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <SpotList></SpotList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    height: 32,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 40
  }
});
