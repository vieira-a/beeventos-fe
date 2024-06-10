import { toast } from '@/components/ui/use-toast';
import { useEffect } from 'react';

import useEventEvaluationStore from '../store/event-evaluation.store';

const useShowEvaluationToast = () => {
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
    } else if (!evaluationResponse.statusCode && evaluationResponse.message) {
      toast({
        title: 'Obrigado!',
        description: evaluationResponse.message,
      });
      clearEvaluationResponse();
    }
  }, [evaluationResponse, clearEvaluationResponse]);
};

export default useShowEvaluationToast;
