import useLoginDialogStore from '@/features/Login/store/login-dialog.store';
import useSessionStore from '@/features/Login/store/session.store';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export const PrivateRoutes = () => {
  const openLoginDialog = useLoginDialogStore((store) => store.openLoginDialog)
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