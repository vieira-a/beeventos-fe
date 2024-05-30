import { create } from 'zustand';

import { EventService } from '../services/event.service';
import { EventsResult, EventsState } from '../types/events.types';
import { EventFilterOptions } from '../types/filter-options.types';

const eventService = new EventService();

const useEventsStore = create<EventsState>((set) => ({
  result: {
    data: [],
    meta: {
      page: 1,
      take: 10,
      itemCount: 0,
      pageCount: 1,
      hasNextPage: false,
      hasPreviousPage: false,
    },
  },

  setResult: (events: EventsResult) => {
    set((state) => ({ ...state, result: events }));
  },

  filterOptions: {
    title: '',
  },

  setFilterOptions: (options: EventFilterOptions) => {
    set((state) => ({ ...state, filterOptions: options }));
  },

  readAllEvents: async (filterOptions?: EventFilterOptions) => {
    const data = await eventService.readAllEvents(filterOptions);

    if (data) {
      set({ result: data });
    } else {
      set({
        result: {
          data: [],
          meta: {
            page: 1,
            take: 10,
            itemCount: 0,
            pageCount: 0,
            hasNextPage: false,
            hasPreviousPage: false,
          },
        },
      });
    }
  },
}));

export default useEventsStore;
