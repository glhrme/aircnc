import React, { useState } from 'react';
import './App.css';
import api from './services/api';

import logo from './assets/logo.svg';

function App() {

  //Set email atualiza o valor da variavel
  //Real-time
  const [ email, setEmail ] = useState('');

  //Função responsável por enviar o submit
  async function handleSubmit(event){
    //Não faça seu padrão de enviar pra outra tela
    event.preventDefault();

    const response = await api.post('/session', { email:email });
    const { _id } = response.data;

    localStorage.setItem('user', _id);

  }

  return (
    <div className="container">
      <img src={logo} alt="Logo do AirCNC" />
      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para a sua empresa
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            type="email"
            placeholder="Seu melhor e-mail"
            onChange={event => setEmail(event.target.value)}
          />
          <button className="btn" type="submit">Entrar</button>
        </form>

      </div>
    </div>
  );
}

export default App;
