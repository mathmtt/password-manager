import React from 'react';

function Form() {
  return (
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
      <button type="reset">Cancelar</button>
    </form>
  );
}

export default Form;
