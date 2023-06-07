import React, { useState } from 'react';
import Check from './Validation/Validation';

export type ButtonProps = () => void;
export type ImputProps = {
  job: string;
  login: string;
  password: string;
  URL: string;
};

const registerMain = {
  job: '',
  login: '',
  password: '',
  URL: '',
};

function Form() {
  const [register, setRegister] = useState(false);
  const [registerForm, setRegisterForm] = useState<ImputProps>(registerMain);
  //   const validClass = 'valid-password';
  //   const invalidClass = 'invalid-password';
  //   const [verifyPassword, setVerifyPassword] = useState({
  //     letrasENumeros: invalidClass,
  //     special: invalidClass,
  //     minL: invalidClass,
  //     maxL: invalidClass,
  // });
  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterForm({
      ...registerForm, [e.target.name]: e.target.value,
    });
  };
  const passwordTest = () => {
    const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).+$/;
    const regexTest = regex.test(registerForm.password);
    return regexTest;
  };
  const loginTest = () => {
    if (passwordTest()) {
      return registerForm.login.length > 0
    && registerForm.job.length > 0
    && registerForm.password.length > 7
    && registerForm.password.length < 17;
    }
  };
  return (
    <div>
      {
        register ? (
          <form>
            <label htmlFor="inputText">
              Nome do serviço
              <input
                type="text"
                id="inputText"
                name="job"
                required
                value={ registerForm.job }
                onChange={ handleForm }
              />
            </label>
            <label htmlFor="inputLogin">
              Login
              <input
                type="text"
                id="inputLogin"
                name="login"
                required
                value={ registerForm.login }
                onChange={ handleForm }
              />
            </label>
            <label htmlFor="inputPassword">
              Senha
              <input
                type="password"
                id="inputPassword"
                name="password"
                required
                value={ registerForm.password }
                onChange={ handleForm }
              />
              <Check password={ registerForm.password } />
            </label>
            <label htmlFor="inputURL">
              URL
              <input
                type="text"
                id="inputURL"
                name="URL"
                required
                value={ registerForm.URL }
                onChange={ handleForm }
              />
            </label>
            <button
              disabled={ !loginTest() }
              type="button"
            >
              Cadastrar
            </button>
            <button type="button" onClick={ () => setRegister(false) }>Cancelar</button>
          </form>
        ) : <button onClick={ () => setRegister(true) }>Cadastrar nova senha</button>
    }
    </div>
  );
}

export default Form;
