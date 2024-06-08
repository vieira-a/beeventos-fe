import { create } from 'zustand';

import {
  EvaluationState,
  EventEvaluationData,
  initialEventEvaluationData,
} from '../types/event-evaluation.types';

const useEventEvaluationStore = create<EvaluationState>((set) => ({
  data: initialEventEvaluationData,

  setEvaluationData: async (data: EventEvaluationData) => {
    set({ data: data });
  },
}));

export default useEventEvaluationStore;
