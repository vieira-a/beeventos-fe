import { create } from 'zustand';

import { EventService } from '../services/event.service';
import { EventsResult, EventsState } from '../types/events.types';

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

  readAllEvents: async () => {
    try {
      const data = await eventService.readAllEvents();
      if (data) {
        set({ result: data });
      }
    } catch (error) {
      console.error(error);
    }
  },
}));

export default useEventsStore;
