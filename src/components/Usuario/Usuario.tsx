import { LoginForm } from '../ButtonProps';

type UsuarioProps = {
  LoginProps: LoginForm[];
};

export default function Usuario({ LoginProps }: UsuarioProps) {
  return (
    <div>
      {LoginProps.length < 1 ? (
        <p>Nenhuma senha cadastrada</p>
      ) : (
        <div>
          {LoginProps.map((elemento) => (
            <div key={ elemento.id }>
              <a href={ elemento.URL }>
                { elemento.job }
              </a>
              <p>{ elemento.login }</p>
              <p>{ elemento.password }</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
