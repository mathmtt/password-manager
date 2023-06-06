import React, { useState } from 'react';

function Form() {
  const [register, setRegister] = useState(false);
  return (
    <div>
      {
        register ? (
          <form>
            <label htmlFor="inputText">
              Nome do serviço
              <input type="text" id="inputText" />
            </label>
            <label htmlFor="inputLogin">
              Login
              <input type="text" id="inputLogin" />
            </label>
            <label htmlFor="inputPassword">
              Senha
              <input type="password" id="inputPassword" />
            </label>
            <label htmlFor="inputURL">
              URL
              <input type="text" id="inputURL" />
            </label>
            <button type="submit">Cadastrar</button>
            <button type="reset" onClick={ () => setRegister(false) }>Cancelar</button>
          </form>
        ) : <button onClick={ () => setRegister(true) }> Cadastrar nova senha</button>
    }
    </div>
  );
}

export default Form;
