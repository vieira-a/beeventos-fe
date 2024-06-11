import { toast } from '@/components/ui/use-toast';
import useCreateEventStore from '@/modules/events/store/create-event.store';
import { useEffect } from 'react';

const useShowFinishEventToast = () => {
  const { finishEventResponse, clearFinishEventResponse } =
    useCreateEventStore();

  useEffect(() => {
    if (finishEventResponse.statusCode) {
      toast({
        title: 'Uh oh! Algo deu errado.',
        description: finishEventResponse.message,
        variant: 'destructive',
      });
      clearFinishEventResponse();
    } else if (!finishEventResponse.statusCode && finishEventResponse.message) {
      toast({
        title: 'Obrigado!',
        description: finishEventResponse.message,
      });
      clearFinishEventResponse();
    }
  }, [finishEventResponse, clearFinishEventResponse]);
};

export default useShowFinishEventToast;
