import useLoginStore from '@/modules/users/auth/store/auth.store';
import useSessionStore from '@/modules/users/auth/store/session.store';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export const PrivateRoutes = () => {
  const openLoginDialog = useLoginStore((store) => store.openLoginDialog)
  const isLogged = useSessionStore((store) => store.isLogged);

  useEffect(() => {
    if (!isLogged) {
      openLoginDialog();
    }
  }, [isLogged, openLoginDialog]);
  
  return (
    isLogged ? <Outlet/> : null
  )
}