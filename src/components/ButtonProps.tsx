export type ButtonProps = () => void;
export type ImputProps = {
  job: string;
  login: string;
  password: string;
  URL: string;
};
export type RegisterForm = {
  username: string;
  password: string;
  email: string;
  id: number;
};
export type LoginForm = {
  id?: number;
  URL: string;
  job: string;
  login: string;
  password: string;
};

export type UsuarioProps = {
  LoginProps: LoginForm[];
};
