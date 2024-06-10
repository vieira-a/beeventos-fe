import { toast } from '@/components/ui/use-toast';
import { useEffect } from 'react';

import useEventEvaluationStore from '../store/event-evaluation.store';

const useShowEvaluationToast = () => {
  const { evaluationResponse } = useEventEvaluationStore();

  useEffect(() => {
    if (evaluationResponse.statusCode) {
      toast({
        title: 'Uh oh! Algo deu errado.',
        description: evaluationResponse.message,
        variant: 'destructive',
      });
    } else if (!evaluationResponse.statusCode && evaluationResponse.message) {
      toast({
        title: 'Obrigado!',
        description: evaluationResponse.message,
      });
    }
  }, [evaluationResponse]);
};

export default useShowEvaluationToast;
