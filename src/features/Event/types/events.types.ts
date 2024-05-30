import { PageMeta } from '@/common/types/pagination';

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
  result: EventsResult;
  filterOptions: EventFilterOptions;
  readAllEvents: (filterOptions: EventFilterOptions) => void;
};
