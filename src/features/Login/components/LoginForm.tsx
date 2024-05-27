import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { LoginSchema, LoginSchemaType } from '../schema/login.schema';
import useLoginStore from '../store/login.store';

export const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema)
  });

  const login = useLoginStore(state => state.login);
  const errorMessage = useLoginStore(state => state.errorMessage);

  const onSubmit = (data: LoginSchemaType) => {
    login(data.email, data.password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
      <div className='flex flex-col gap-2'>
        <label htmlFor="email" className='text-sm font-medium'>E-mail</label>
        <Input 
          id='email' 
          type='email' 
          placeholder='Entre com o seu e-mail'
          {...register("email", { required: "E-mail é obrigatório" })}
        />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor="password" className='text-sm font-medium'>Senha</label>
        <Input 
          id='password' 
          type='password' 
          placeholder='Entre com a sua senha'
          {...register("password", { required: "Senha é obrigatória" })}
        />
      </div>
      <p className='text-xs text-center'>Não possui conta? Registre-se <a href="#">aqui</a></p>
      <Button className='bg-yellow-500 hover:bg-yellow-400 text-slate-900 w-full'>Entrar</Button>
      <div>
        {errors && errorMessage && (
          <Alert
            variant="destructive"
          >
            <AlertTitle>Erro na tentativa de login:</AlertTitle>
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}
      </div>
    </form>
  );
};
