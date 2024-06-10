import { Event, initialEvent } from '@/modules/events/types';
import { PageMeta } from '@/shared/types/pagination';

export type EvaluationState = {
  data: EventEvaluationData;
  result: AtendeeRegistrationsResult;
  evaluationResponse: EvaluationResponse;
  setEvaluationResponse: (response: EvaluationResponse) => void;
  setEvaluationData: (data: EventEvaluationData) => void;
  setAtendeeRegistrations: (atendeeId: string, token: string) => void;
};

export type EventEvaluationData = {
  atendeeId?: string;
  rating: number;
  comment?: string;
  anonymous: boolean;
};

export const initialEventEvaluationData: EventEvaluationData = {
  rating: 0,
  comment: '',
  anonymous: false,
};

export type AtendeeRegistrationsResult = {
  data: AtendeeRegistrations[];
  meta: PageMeta;
};

export type AtendeeRegistrations = {
  id: string;
  createdAt: string;
  updatedAt: string;
  event: Event;
};

export type EvaluationResponse = {
  statusCode?: number | undefined;
  message: string | undefined;
};

export const initialEvaluationResponse: EvaluationResponse = {
  statusCode: undefined,
  message: undefined,
};

export const initialAtendeeRegistrations: AtendeeRegistrations = {
  id: '',
  createdAt: '',
  updatedAt: '',
  event: initialEvent,
};

export const initialPageMeta: PageMeta = {
  page: 1,
  take: 10,
  itemCount: 0,
  pageCount: 1,
  hasNextPage: false,
  hasPreviousPage: false,
};

export const initialAtendeeRegistrationsResult: AtendeeRegistrationsResult = {
  data: [initialAtendeeRegistrations],
  meta: initialPageMeta,
};
