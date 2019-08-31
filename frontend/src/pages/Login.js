import React, { useState } from 'react';
import './Login.css';
import api from '../services/Api';

export default function Login({ history }) {
    const [email, passwd, setPasswd, setEmail] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await api.post('/users', {
            email,
            passwd
        });
        const { _id } = response.data;
        history.push(`/user/${_id}`);
    }

    return (
        <div className = "login-container">
            <form onSubmit = { handleSubmit }>
                <h1>TinBooks</h1>
                <input
                    placeholder = "e-mail"
                    value = { email }
                    onChange = { e => setEmail(e.target.value) }
                />
                <input
                    placeholder = "senha"
                    value = { passwd }
                    onChange = { e => setPasswd(e.target.value) }
                />
                <button type = "submit">Enviar</button>
            </form>
        </div>
    );
}