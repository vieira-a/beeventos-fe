import useSessionStore from '@/features/Login/store/session.store';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoutes = () => {
  const isLogged = useSessionStore((store) => store.isLogged);
  return (
    isLogged ? <Outlet/> : <Navigate to="/login"/>
  )
}