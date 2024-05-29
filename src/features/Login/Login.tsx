import logo from '../../assets/logo.png';
import { LoginForm } from './components/LoginForm';

export const Login = () => {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col text-center">
        <img src={logo} alt="Logo Beeventos" className="w-[50%] m-auto" />
        <h2>Login</h2>
      </div>
      <div>
        <LoginForm />
      </div>
    </section>
  );
};
