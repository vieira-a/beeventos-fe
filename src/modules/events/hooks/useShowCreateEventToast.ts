import { toast } from '@/components/ui/use-toast';
import { useEffect } from 'react';

import useCreateEventStore from '../store/create-event.store';

const useShowCreateEventToast = () => {
  const {
    createEventResponse,
    clearCreateEventResponse,
    closeCreateEventDialog,
  } = useCreateEventStore();

  useEffect(() => {
    if (createEventResponse.statusCode) {
      toast({
        title: 'Uh oh! Algo deu errado.',
        description: createEventResponse.message,
        variant: 'destructive',
      });
      clearCreateEventResponse();
    } else if (!createEventResponse.statusCode && createEventResponse.message) {
      toast({
        title: 'Sucesso!',
        description: createEventResponse.message,
      });
      clearCreateEventResponse();
      closeCreateEventDialog();
    }
  }, [createEventResponse, clearCreateEventResponse]);
};

export default useShowCreateEventToast;
