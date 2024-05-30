import { PageMeta } from '@/common/types/pagination';

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
  readAllEvents: () => void;
};

// export type EventsState = {
//   result: any;
//   readAllEvents: () => void;
// };
