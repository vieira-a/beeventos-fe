import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { LoginSchema, LoginSchemaType } from '../schema/login.schema';
import useLoginStore from '../store/login.store';

export function LoginForm() {
  const login = useLoginStore((state) => state.login);
  const errorMessage = useLoginStore((state) => state.errorMessage);

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  function onSubmit(data: LoginSchemaType) {
    login(data.email, data.password, data.loginRole);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <Input
                type="email"
                placeholder="Entre com o seu e-mail"
                onChange={field.onChange}
              />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <Input
                type="password"
                placeholder="Entre com a sua senha"
                onChange={field.onChange}
              />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="loginRole"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Perfil</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um perfil de usuário" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="user">Organizador</SelectItem>
                  <SelectItem value="atendee">Participante</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <p className='text-sm text-center'>Ainda não tem conta? Registre-se <Link to={"/register"}><span className=' text-yellow-600 underline decoration-bouble'>aqui</span></Link></p>
        <Button className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 w-full">
          Entrar
        </Button>
        <FormMessage className="text-center">{errorMessage}</FormMessage>
      </form>
    </Form>
  );
}
