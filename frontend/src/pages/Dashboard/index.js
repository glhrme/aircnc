import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import socketio from 'socket.io-client';
import {urlBackend} from '../../config/cfg.json';

//CSS
import './styles.css';

export default function Dashboard(){
    const [ user, setUser ] = useState('')
    const [ spots, setSpots ] = useState([]);

    useEffect(()=>{
        
        const user_id = localStorage.getItem('user');
        const socket = socketio(urlBackend,{
            query: { user_id }
        });

        socket.on('booking_request', data => {
            console.log(data);
        })

    },[]);

    useEffect(
        ()=>{
            async function loadSpots(){
                const user_id = localStorage.getItem('user');
                const response = await api.get('/dashboard',{
                    headers:{
                        user_id: user_id
                    }
                });

                //console.log(response.data.success);
                //Passando os resultados para os spots
                setSpots(response.data.success);
                //Buscando e setando email
                setUser(localStorage.getItem('email'));
            }
            loadSpots();
        },[]);

    return (
        <>
            {/* Exibindo email */}
            <p>{user}</p>
            <ul className="spot-list">
                {/* Percorrendo todos os spots e em cada um deles executando e retornando os valores abaixo */}
                {spots.map(spot => (
                    <li key={spot._id}>
                        <header style={{
                            backgroundImage: `url(${spot.thumbnail_url})`
                        }}></header>
                        <strong> {spot.company} </strong>
                        {/* Exemplo de Operador Ternário do PHP, formatando o valor para real */}
                        <span> {spot.price ? `R$ ${spot.price},00/dia` : 'GRATUITO'} </span>
                    </li>
                ))}
            </ul>
            <Link to='/new-spot'>
                <button className="btn">Cadastrar Novo Spot</button>
            </Link>
        </>
    );
}