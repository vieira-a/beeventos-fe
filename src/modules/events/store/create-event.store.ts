import { create } from 'zustand';

import { EventService } from '../services/event.service';
import {
  CreateEventResponse,
  CreateEventState,
  initialCreateEventData,
  initialCreateEventResponse,
  initialEventsTypesData,
} from '../types/create-event.types';

const useCreateEventStore = create<CreateEventState>((set) => ({
  createEventData: initialCreateEventData,
  createEventResponse: initialCreateEventResponse,
  isCreateEventDialogOpen: false,
  eventTypes: initialEventsTypesData,

  openCreateEventDialog: () => set({ isCreateEventDialogOpen: true }),

  closeCreateEventDialog: () => set({ isCreateEventDialogOpen: false }),

  setCreateEventResponse: async (response: CreateEventResponse) => {
    set({ createEventResponse: response });
  },

  setEventTypes: async (access_token: string) => {
    const eventService = new EventService();
    const data = await eventService.readEventsTypes(access_token);
    set({ eventTypes: data });
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
