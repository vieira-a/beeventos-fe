import useAuthStore from '@/modules/users/auth/store/auth.store';
import { IoChevronBack } from 'react-icons/io5';
import { MdLogout } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

export const EventHeader = () => {
  const navigate = useNavigate();
  const logout = useAuthStore((store) => store.logout);

  const handleLogout = () => {
    logout()
  }

  return (
    <header className="flex justify-between p-3 items-center bg-slate-800">
      <IoChevronBack className='text-2xl text-yellow-500 hover:text-yellow-400' onClick={() => navigate(-1)}/>
      <Link to={'/'}><h4 className='font-bold text-slate-100'>beeventos</h4></Link>
      <MdLogout onClick={handleLogout} className='text-2xl text-yellow-500 hover:text-yellow-400 cursor-pointer'/>
    </header>
  )
}