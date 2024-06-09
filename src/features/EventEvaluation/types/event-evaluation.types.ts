import { PageMeta } from '@/common/types/pagination';
import { Event, initialEvent } from '@/features/Event/types';

export type EvaluationState = {
  data: EventEvaluationData;
  setEvaluationData: (data: EventEvaluationData) => void;
  result: AtendeeRegistrationsResult;
  setAtendeeRegistrations: (atendeeId: string, token: string) => void;
};

export type EventEvaluationData = {
  atendeeId?: string;
  rating: number;
  comment?: string;
  anonymous?: boolean;
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
