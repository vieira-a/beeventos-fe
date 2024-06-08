import { create } from 'zustand';

import {
  EventRegistration,
  initialEventRegistration,
} from '../@types/event-registration.types';
import { EventRegistrationService } from '../services';

const useEventRegistrationStore = create<EventRegistration>((set) => ({
  statusCode: 0,
  data: initialEventRegistration.data,
  message: initialEventRegistration.message,

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
      set({
        statusCode: registration.statusCode,
        message: registration.message,
        data: registration.data,
      });
    }
  },
}));

export default useEventRegistrationStore;
