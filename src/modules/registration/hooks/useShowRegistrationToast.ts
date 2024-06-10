import { toast } from '@/components/ui/use-toast';
import { useEffect } from 'react';

import useEventRegistrationStore from '../store/event-registration.store';

const useShowRegistrationToast = () => {
  const { registrationResponse, clearRegistrationResponse } =
    useEventRegistrationStore();

  useEffect(() => {
    if (registrationResponse.statusCode) {
      toast({
        title: 'Uh oh! Algo deu errado.',
        description: registrationResponse.message,
        variant: 'destructive',
      });
      clearRegistrationResponse();
    } else if (
      !registrationResponse.statusCode &&
      registrationResponse.message
    ) {
      toast({
        title: 'Obrigado!',
        description: registrationResponse.message,
      });
      clearRegistrationResponse();
    }
  }, [registrationResponse, clearRegistrationResponse]);
};

export default useShowRegistrationToast;
