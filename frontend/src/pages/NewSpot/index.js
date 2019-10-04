import React, { useState, useMemo } from 'react';
import api from '../../services/api';

//useMemo é um refresh a cada coisa que é atualizada ele da um reload em todo o component

//CSS
import './styles.css';
import camera from '../../assets/camera.svg';

export default function NewSpot(){

    const [company, setCompany ] = useState('');
    const [techs, setTechs ] = useState('');
    const [price, setPrice ] = useState('');
    const [ thumbnail, setThumbnail ] = useState(null);

    const preview = useMemo(
        ()=>{
            return thumbnail ? URL.createObjectURL(thumbnail) : null;
        },
        [thumbnail]
    );

    async function handleSubmit(event){
        event.preventDefault();
        const data = new FormData();
        const user_id = localStorage.getItem('user');

        data.append('thumbnail', thumbnail);
        data.append('company', company);
        data.append('techs', techs);
        data.append('price', price);

        api.post('/spots', data, {
            headers: { user_id }
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label 
                id="thumbnail" 
                style={{backgroundImage: `url(${preview})`}}
                className={thumbnail ? 'has-thumbnail' : ''}
                >
                    <input type="file" onChange={event => setThumbnail(event.target.files[0])} />
                    <img src={camera} alt="Select img" />
                </label>

                <label htmlFor="company">Empresa:</label>
                <input
                    id="company"
                    placeholder="Sua empresa incrível"
                    value={company}
                    onChange={event => setCompany(event.target.value)}
                />

                <label htmlFor="techs">Tecnologias: <span>(separadas por vírgula)</span></label>
                <input
                    id="techs"
                    placeholder="Tecnologias da empresa"
                    value={techs}
                    onChange={event => setTechs(event.target.value)}
                />

                <label htmlFor="price">Diária:</label>
                <input
                    id="price"
                    placeholder="Valor diário"
                    value={price}
                    onChange={event => setPrice(event.target.value)}
                />

                <button className="btn">Cadastrar</button>

            </form>
        </>
    );
}