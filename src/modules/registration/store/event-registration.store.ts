import { create } from 'zustand';

import { EventRegistrationService } from '../services';
import {
  EventRegistration,
  initialEventRegistration,
  initialRegistrationResponse,
  RegistrationResponse,
} from '../types/event-registration.types';

const useEventRegistrationStore = create<EventRegistration>((set) => ({
  data: initialEventRegistration.data,
  registrationResponse: initialRegistrationResponse,

  setRegistrationResponse: async (response: RegistrationResponse) => {
    set({ registrationResponse: response });
  },

  clearRegistrationResponse: async () => {
    set({
      registrationResponse: {
        message: undefined,
        statusCode: undefined,
      },
    });
  },

  setEventRegistration: async (
    eventId: string,
    atendeeId: string,
    token: string,
  ) => {
    const eventRegistrationService = new EventRegistrationService();
    const registration = await eventRegistrationService.registration(
      eventId,
      atendeeId,
      token,
    );

    if (registration) {
      set({ data: registration.data });
      set({
        registrationResponse: {
          message: registration.message,
          statusCode: registration.statusCode,
        },
      });
    }
  },
}));

export default useEventRegistrationStore;
