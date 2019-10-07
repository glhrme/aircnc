import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

import api from '../services/api';

export default function SpotList({ tech }) {

    const [spots, setSpots] = useState([]);

    useEffect(() => {
        async function loadSpots() {
            const response = await api.get('/spots', {
                params: { tech }
            });
            console.log(response.data);
            setSpots(response.data);
        }
        loadSpots();
        //console.log(spots)

    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Empresas que usam <Text style={styles.bold}>{tech}</Text></Text>
            <FlatList
                style={styles.list}
                data={spots}
                keyExtractor={spot => spot._id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.listItem} >
                        <Image style={styles.thumbnail} source={{ uri: item.thumbnail_url }}/>
                        <Text style={styles.company}>{item.company}</Text>
                        <Text style={styles.price}> { item.price ? `R$ ${item.price}/dia` : 'GRATUITO'} </Text>
                        <TouchableOpacity 
                        onPress={()=>{
                            
                        }}
                        style={styles.button}>
                            <Text style={styles.buttonText}>Solicitar Reserva</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    button: {

    },
   
    buttonText: {

    },

    price: {

    },

    company: {

    },

    thumbnail: {
        height: 50
    },

    listItem:{

    },

    container: {
        marginTop: 30
    },

    title: {
        fontSize: 20,
        color: '#444',
        paddingHorizontal: 20,
        marginBottom: 15
    },

    bold: {
        fontWeight: 'bold'
    },

    list: {

    }
});