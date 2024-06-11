import useAuthStore from '@/modules/users/auth/store/auth.store';
import useSessionStore from '@/modules/users/auth/store/session.store';
import useSignupStore from '@/modules/users/signup/store/signup.store';
import { Link } from 'react-router-dom';

export const MenuHeader = () => {
  const isLogged = useSessionStore((store) => store.isLogged);
  const openLoginDialog = useAuthStore((store) => store.openLoginDialog);
  const openSignupDialog = useSignupStore((store) => store.openSignupDialog)
  
  const handleOpenLoginDialog = () => {
    openLoginDialog()
  }

  const handleOpenSignupDialog = () => {
    openSignupDialog()
  }

  return (
    <header className="p-3 flex justify-between items-center">
      <div>
        <Link to={'/'}><h4 className='font-bold text-slate-700'>beeventos</h4></Link>
      </div>
      <nav>
        <ul className='text-slate-700 text-xs font-semibold uppercase flex gap-4 items-center'>
          {isLogged ? (
            <li>
              <Link to={'/my-events'}>Meus eventos</Link>
            </li>
          ) : (
            <>
              <li className='cursor-pointer' onClick={handleOpenLoginDialog}>Entrar</li>
              <li className='border bg-yellow-400 border-yellow-400 rounded px-4 py-2 hover:bg-yellow-300 cursor-pointer' onClick={handleOpenSignupDialog}>Cadastre-se</li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}