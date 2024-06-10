import { create } from 'zustand';

import { EventEvaluationService } from '../services/event-evaluation.service';
import {
  EvaluationResponse,
  EvaluationState,
  EventEvaluationData,
  initialAtendeeRegistrationsResult,
  initialEvaluationResponse,
  initialEventEvaluationData,
} from '../types/event-evaluation.types';

const useEventEvaluationStore = create<EvaluationState>((set) => ({
  data: initialEventEvaluationData,
  result: initialAtendeeRegistrationsResult,
  evaluationResponse: initialEvaluationResponse,

  setEvaluationData: async (data: EventEvaluationData) => {
    set({ data: data });
  },

  setEvaluationResponse: async (response: EvaluationResponse) => {
    set({ evaluationResponse: response });
  },

  clearEvaluationResponse: () =>
    set({
      evaluationResponse: {
        statusCode: undefined,
        message: undefined,
      },
    }),

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
