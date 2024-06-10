import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { SignupSchema, SignupSchemaType } from '../schemas';
import { SignupService } from '../services/signup.service';
import useSignupStore from '../store/signup.store';
import { AccountRoles } from '../types/account-roles';

export function SignupForm() {
  const setSignupResponse = useSignupStore((store) => store.setSignupResponse);

  const form = useForm<SignupSchemaType>({
    resolver: zodResolver(SignupSchema),
  });

  async function onSubmit(data: SignupSchemaType) {
    const signupService = new SignupService();

    const loginData = {
      ...data,
      role: AccountRoles.ATENDEE
    }
  
    console.log(loginData)
    const response = await signupService.signupAtendee(loginData);
    setSignupResponse({
      message: await response.message,
      statusCode: await response.statusCode,
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <Input
                type="text"
                placeholder="Digite o seu nome"
                onChange={field.onChange}
              />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sobrenome</FormLabel>
              <Input
                type="text"
                placeholder="Digite o seu sobrenome"
                onChange={field.onChange}
              />
            </FormItem>
          )}
        />
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
          name="passwordConfirmation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirmação de senha</FormLabel>
              <Input
                type="password"
                placeholder="Confirme a sua senha"
                onChange={field.onChange}
              />
            </FormItem>
          )}
        />
        {/* <FormField
          control={form.control}
          name="role"
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
                  <SelectItem value="admin">Administrador</SelectItem>
                  <SelectItem value="user">Organizador</SelectItem>
                  <SelectItem value="atendee">Participante</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        /> */}
        <Button className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 w-full">
          Criar conta
        </Button>
      </form>
    </Form>
  );
}
