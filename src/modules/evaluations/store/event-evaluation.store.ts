import { create } from 'zustand';

import { EventEvaluationService } from '../services/event-evaluation.service';
import {
  EvaluationState,
  EventEvaluationData,
  initialAtendeeRegistrationsResult,
  initialEventEvaluationData,
} from '../types/event-evaluation.types';

const useEventEvaluationStore = create<EvaluationState>((set) => ({
  data: initialEventEvaluationData,
  result: initialAtendeeRegistrationsResult,

  setEvaluationData: async (data: EventEvaluationData) => {
    set({ data: data });
  },

  setAtendeeRegistrations: async (atendeeId: string, token: string) => {
    const eventEvaluationService = new EventEvaluationService();
    const result = await eventEvaluationService.readAtendeeRegistrations(
      atendeeId,
      token,
    );
    set({ result: result.result });
  },
}));

export default useEventEvaluationStore;
