import useGetUserProfile from '@/modules/users/auth/hooks/useGetUserProfile';
import useLoginStore from '@/modules/users/auth/store/auth.store';
import useSessionStore from '@/modules/users/auth/store/session.store';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export const AdminRoutes = () => {

  const navigate = useNavigate()
  useGetUserProfile();
  const openLoginDialog = useLoginStore((store) => store.openLoginDialog)
  const {isLogged, userRole} = useSessionStore();

  useEffect(() => {
    if (!isLogged) {
      navigate('/')
      openLoginDialog();
    }

    if(userRole !== 'admin') {
      navigate('/my-events')
    }
  }, [isLogged, openLoginDialog]);
  
  return (
    isLogged ? <Outlet/> : null
  )
}