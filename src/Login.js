import React, { useState } from 'react';
import './App.css'; 

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (email === 'usuario@generico.com' && password === 'senha123') {
      alert('Login bem-sucedido!');
    } else {
      setError('Email ou senha incorretos');
    }
  };

  return (
    <>
      <div className='Principal'>
        <div className="login">
          <h1 className='lg'> Use seu login para acessar </h1>
          <input
            className="Input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Insira seu Email"
          />
          <input
            className="Input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Insira sua Senha"
          />
          <button className='Entrar' onClick={handleLogin}>
            Entrar
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>
    </>
  );
}