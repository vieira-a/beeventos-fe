import { PageMeta } from '@/shared/types/pagination';

import { EventFilterOptions } from './filter-options.types';

export type Event = {
  id: string;
  eventType: string;
  title: string;
  about: string;
  bannerUrl: string;
  user: string;
  local: string;
  startAt: string;
  endAt: string;
  createdAt: string;
  status: string;
  updatedAt: string;
};

export type EventsResult = {
  data: Event[];
  meta: PageMeta;
};

export type EventsState = {
  event: Event;
  result: EventsResult;
  allEvents: EventsResult;
  filterOptions: EventFilterOptions;
  readEventById: (id: string) => void;
  readAllEvents: (filterOptions: EventFilterOptions) => void;
  readAvalibleEvents: (filterOptions: EventFilterOptions) => void;
};

export const initialEvent: Event = {
  id: '',
  eventType: '',
  title: '',
  about: '',
  bannerUrl: '',
  user: '',
  local: '',
  startAt: '',
  endAt: '',
  createdAt: '',
  status: '',
  updatedAt: '',
};

export const initialResult: EventsResult = {
  data: [],
  meta: {
    page: 1,
    take: 10,
    itemCount: 0,
    pageCount: 1,
    hasNextPage: false,
    hasPreviousPage: false,
  },
};
