import { create } from 'zustand';

import { EventService } from '../services/event.service';
import {
  CreateEventResponse,
  CreateEventState,
  FinishEventResponse,
  initialCreateEventData,
  initialCreateEventResponse,
  initialCreateFinishEventResponse,
  initialEventsTypesData,
} from '../types/create-event.types';

const useCreateEventStore = create<CreateEventState>((set) => ({
  createEventData: initialCreateEventData,
  createEventResponse: initialCreateEventResponse,
  finishEventResponse: initialCreateFinishEventResponse,
  isCreateEventDialogOpen: false,
  eventTypes: initialEventsTypesData,

  openCreateEventDialog: () => set({ isCreateEventDialogOpen: true }),

  closeCreateEventDialog: () => set({ isCreateEventDialogOpen: false }),

  setCreateEventResponse: async (response: CreateEventResponse) => {
    if (response) {
      set({ createEventResponse: response });
    } else {
      set({ createEventResponse: initialCreateFinishEventResponse });
    }
  },

  setFinishEventResponse: async (response: FinishEventResponse) => {
    set({ finishEventResponse: response });
  },

  clearFinishEventResponse: async () => {
    set({
      finishEventResponse: {
        statusCode: undefined,
        message: undefined,
      },
    });
  },

  setEventTypes: async (access_token: string) => {
    const eventService = new EventService();
    const data = await eventService.readEventsTypes(access_token);
    if (data) {
      set({ eventTypes: data });
    } else {
      set({ eventTypes: initialEventsTypesData });
    }
  },

  clearCreateEventResponse: async () =>
    set({
      createEventResponse: {
        message: undefined,
        statusCode: undefined,
      },
    }),
}));

export default useCreateEventStore;
