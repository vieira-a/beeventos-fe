import useSessionStore from '@/features/Login/store/session.store';
import { useEffect } from 'react';

const useGetUserProfile = () => {
  const setUserProfile = useSessionStore((store) => store.setUserProfile);

  useEffect(() => {
    setUserProfile();
  }, []);
};

export default useGetUserProfile;
