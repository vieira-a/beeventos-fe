import { toast } from '@/components/ui/use-toast';
import { useEffect } from 'react';

import useEventEvaluationStore from '../store/event-evaluation.store';

const useShowEventEvaluationToast = () => {
  const { evaluationResponse, clearEvaluationResponse } =
    useEventEvaluationStore();

  useEffect(() => {
    if (evaluationResponse.statusCode) {
      toast({
        title: 'Não há dados.',
        description: evaluationResponse.message,
      });
      clearEvaluationResponse();
    }
  }, [evaluationResponse, clearEvaluationResponse]);
};

export default useShowEventEvaluationToast;
