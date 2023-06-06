function Validation({ password }: { password: string }) {
  const regexWNvalid = /^(?=.*[a-zA-Z])(?=.*[0-9]).+$/;
  const specialCharvalid = /[^\w\s]/;
  const regexWN = regexWNvalid.test(password);
  const specialChar = specialCharvalid.test(password);

  return (
    <div>
      {password.length > 7 ? (
        <p className="valid-password-check">Possuir 8 ou mais caracteres</p>
      ) : (
        <p className="invalid-password-check">Possuir 8 ou mais caracteres</p>
      )}
      {password.length > 7 && password.length < 17 ? (
        <p className="valid-password-check">Possuir até 16 caracteres</p>
      ) : (
        <p className="invalid-password-check">Possuir até 16 caracteres</p>
      )}
      {(regexWN) ? (
        <p className="valid-password-check">Possuir letras e números</p>
      ) : (
        <p className="invalid-password-check">Possuir letras e números</p>
      )}
      {(specialChar) ? (
        <p className="valid-password-check">Possuir algum caractere especial</p>
      ) : (
        <p className="invalid-password-check">Possuir algum caractere especial</p>
      )}
    </div>
  );
}

export default Validation;
