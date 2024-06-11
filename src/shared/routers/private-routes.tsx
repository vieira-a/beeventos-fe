import useLoginStore from '@/modules/users/auth/store/auth.store';
import useSessionStore from '@/modules/users/auth/store/session.store';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export const PrivateRoutes = () => {
  const navigate = useNavigate();
  const openLoginDialog = useLoginStore((store) => store.openLoginDialog)
  const isLogged = useSessionStore((store) => store.isLogged);

  useEffect(() => {
    if (!isLogged) {
      navigate('/');
      openLoginDialog();
    }
  }, [isLogged, openLoginDialog]);
  
  return (
    isLogged ? <Outlet/> : null
  )
}