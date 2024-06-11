import { toast } from '@/components/ui/use-toast';
import { useEffect } from 'react';

import useAuthStore from '../../auth/store/auth.store';
import useSignupStore from '../store/signup.store';

const useShowSignupToast = () => {
  const { signupResponse, clearSignupResponse, closeSignupDialog } =
    useSignupStore();

  const openLoginDialog = useAuthStore((store) => store.openLoginDialog);

  useEffect(() => {
    if (signupResponse.statusCode) {
      toast({
        title: 'Uh oh! Algo deu errado.',
        description: signupResponse.message,
        variant: 'destructive',
      });
      clearSignupResponse();
    } else if (!signupResponse.statusCode && signupResponse.message) {
      toast({
        title: 'Boas vindas!',
        description: signupResponse.message,
      });
      clearSignupResponse();
      closeSignupDialog();
      openLoginDialog();
    }
  }, [signupResponse, clearSignupResponse]);
};

export default useShowSignupToast;
