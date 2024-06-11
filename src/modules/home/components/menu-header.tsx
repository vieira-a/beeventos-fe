import useAuthStore from '@/modules/users/auth/store/auth.store';
import useSessionStore from '@/modules/users/auth/store/session.store';
import useSignupStore from '@/modules/users/signup/store/signup.store';
import { MdLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const MenuHeader = () => {
  const isLogged = useSessionStore((store) => store.isLogged);
  const userRole = useSessionStore((store) => store.userRole);
  const {openLoginDialog, logout} = useAuthStore();
  const openSignupDialog = useSignupStore((store) => store.openSignupDialog)
  
  const handleOpenLoginDialog = () => {
    openLoginDialog()
  }

  const handleOpenSignupDialog = () => {
    openSignupDialog()
  }

  const handleLogout = () => {
    logout()
  }

  return (
    <header className="px-3 py-4 flex justify-between items-center">
      <div>
        <Link to={'/'}><h4 className='font-bold text-slate-700'>beeventos</h4></Link>
      </div>
      <nav className='flex gap-6'>
        <ul className='text-slate-700 text-xs font-semibold uppercase flex gap-4 items-center'>
          {isLogged && userRole === 'admin' && (
            <li>
              <Link className='border bg-yellow-400 border-yellow-400 rounded px-4 py-2 hover:bg-yellow-300 cursor-pointer' to={'/admin'}>Admin</Link>
            </li>
          )}
          {isLogged && userRole !== 'admin' && (
            <li>
              <Link className='border bg-yellow-400 border-yellow-400 rounded px-4 py-2 hover:bg-yellow-300 cursor-pointer' to={'/my-events'}>Meus eventos</Link>
            </li>
          )}
          {!isLogged && (
            <>
              <li className='cursor-pointer' onClick={handleOpenLoginDialog}>Entrar</li>
              <li className='border bg-yellow-400 border-yellow-400 rounded px-4 py-2 hover:bg-yellow-300 cursor-pointer' onClick={handleOpenSignupDialog}>Cadastre-se</li>
            </>
          )}
        </ul>
        {isLogged && (
          <MdLogout onClick={handleLogout} className='text-2xl text-yellow-500 hover:text-yellow-400 cursor-pointer'/>
        )}
      </nav>
    </header>
  )
}