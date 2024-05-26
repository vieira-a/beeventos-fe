import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

import useLoginStore from '../store/login.store';

export const LoginForm = () => {
  const [ email, setEmail] = useState('')
  const [ password, setPassword] = useState('')

  const login = useLoginStore(state => state.login);
  
  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    login(email, password)
  }
  
  return (
   <form onSubmit={handleLogin} className='flex flex-col gap-6'>
      
      <div className='flex flex-col gap-2'>
        <label htmlFor="email" className='text-sm font-medium'>E-mail</label>
        <Input id='email' type='text' value={email} onChange={event => setEmail(event.target.value)} placeholder='Entre com o seu e-mail'/>
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor="password" className='text-sm font-medium'>Senha</label>
        <Input id='password' type='password' value={password} onChange={event => setPassword(event.target.value)} placeholder='Entre com a sua senha'/>
      </div>

    <p className='text-xs text-center'>Não possui conta? Registre-se <a href="#">aqui</a></p>
    
    <Button className='bg-yellow-500 hover:bg-yellow-400 text-slate-900 w-full'>Entrar</Button>
   </form>
  )
}
