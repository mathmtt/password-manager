import './App.css';
import React, { useState } from 'react';
import Title from './components/Tittle';
import Usuario from './components/Usuario/Usuario';
import Form from './components/Form';

type ImputProps = {
  job: string;
  login: string;
  password: string;
  URL: string;
};

type RegisterForm = ImputProps & {
  id?: number;
};

function App() {
  const [loginForm, setLoginForm] = useState<RegisterForm[]>([]);
  const [register, setRegister] = useState(true);
  const handleUsuario = (
    e: React.FormEvent<HTMLFormElement>,
    registerForm: RegisterForm,
  ) => {
    e.preventDefault();
    setLoginForm([
      ...loginForm, {
        ...registerForm,
        id: loginForm.length,
      },
    ]);
    setRegister(true);
  };
  const apear = () => {
    setRegister(!register);
  };
  const handleExcluir = (id: string | number | undefined) => {
    setLoginForm(loginForm.filter((elemento) => elemento.id !== id));
  };
  return (
    <div>
      <Title />
      {register
        ? <button onClick={ apear }> Cadastrar nova senha </button>
        : <Form LoginProp={ handleUsuario } CancelProp={ apear } /> }
      <Usuario LoginProps={ loginForm } handleExcluir={ handleExcluir } />
    </div>
  );
}

export default App;
