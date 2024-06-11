import { create } from 'zustand';

import { EventEvaluationService } from '../services/event-evaluation.service';
import {
  EvaluationResponse,
  EvaluationState,
  EventEvaluationData,
  initialAtendeeRegistrationsResult,
  initialEvaluationResponse,
  initialEventEvaluationData,
  initialEventEvaluations,
} from '../types/event-evaluation.types';

const useEventEvaluationStore = create<EvaluationState>((set) => ({
  data: initialEventEvaluationData,
  result: initialAtendeeRegistrationsResult,
  evaluationResponse: initialEvaluationResponse,
  eventEvaluations: initialEventEvaluations,

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

  setEventEvaluations: async (eventId: string, token: string) => {
    const eventEvaluationService = new EventEvaluationService();
    const data = await eventEvaluationService.readEventEvaluations(
      eventId,
      token,
    );

    if (data.statusCode) {
      set({
        evaluationResponse: {
          message: data.message,
          statusCode: data.statusCode,
        },
      });
    }

    if (data) {
      set({
        eventEvaluations: {
          data: data.data[0],
          meta: data.data.meta,
        },
      });
    } else {
      set({ eventEvaluations: initialEventEvaluations });
    }
  },
}));

export default useEventEvaluationStore;
