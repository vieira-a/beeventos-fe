export type EventRegistration = {
  statusCode: number;
  message: string;
  data: EventRegistrationData;
  setEventRegistration: (
    eventId: string,
    atendeeId: string,
    token: string,
  ) => void;
};

type EventRegistrationData = {
  event: Event;
  atendee: Atendee;
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};

type Event = {
  id: string;
};

type Atendee = {
  id: string;
};

export const inidialAtendee: Atendee = {
  id: '',
};

export const inidialEvent: Event = {
  id: '',
};

export const initialEventRegistrationData: EventRegistrationData = {
  event: inidialEvent,
  atendee: inidialAtendee,
  id: '',
  createdAt: '',
  updatedAt: '',
  deletedAt: '',
};

export const initialEventRegistration: EventRegistration = {
  statusCode: 0,
  message: '',
  data: initialEventRegistrationData,
  setEventRegistration(): void {},
};
