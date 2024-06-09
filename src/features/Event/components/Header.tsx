import { IoChevronBack } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';


export const EventHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="grid grid-cols-3 p-3 items-center bg-slate-800">
      <IoChevronBack className='text-2xl text-yellow-500 hover:bg-yellow-400' onClick={() => navigate(-1)}/>
      <Link to={'/'}><h4 className='font-bold text-slate-100'>beeventos</h4></Link>
    </header>
  )
}