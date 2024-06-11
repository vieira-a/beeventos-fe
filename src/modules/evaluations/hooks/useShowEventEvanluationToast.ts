import { toast } from '@/components/ui/use-toast';
import { useEffect } from 'react';

import useEventEvaluationStore from '../store/event-evaluation.store';

const useShowEventEvaluationToast = () => {
  const { evaluationResponse, clearEvaluationResponse } =
    useEventEvaluationStore();

  useEffect(() => {
    if (evaluationResponse.statusCode) {
      toast({
        title: 'Uh oh! Algo deu errado.',
        description: evaluationResponse.message,
        variant: 'destructive',
      });
      clearEvaluationResponse();
    }
  }, [evaluationResponse, clearEvaluationResponse]);
};

export default useShowEventEvaluationToast;
