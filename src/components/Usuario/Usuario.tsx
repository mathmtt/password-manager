import { LoginForm } from '../ButtonProps';

type UsuarioProps = {
  LoginProps: LoginForm[];
  handleExcluir: (id: string | number | undefined) => void;
};

export default function Usuario({ LoginProps, handleExcluir }: UsuarioProps) {
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
              <button
                data-testid="remove-btn"
                onClick={ () => handleExcluir(elemento.id) }
              >
                Apagar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
