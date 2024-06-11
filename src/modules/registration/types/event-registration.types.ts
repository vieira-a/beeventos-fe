export type RegistrationResponse = {
  statusCode: number | undefined;
  message: string | undefined;
};

export type EventRegistration = {
  data: EventRegistrationData;
  registrationResponse: RegistrationResponse;
  setRegistrationResponse: (response: RegistrationResponse) => void;
  clearRegistrationResponse: () => void;
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

export const initialRegistrationResponse: RegistrationResponse = {
  message: undefined,
  statusCode: undefined,
};

export const initialEventRegistration: EventRegistration = {
  data: initialEventRegistrationData,
  registrationResponse: initialRegistrationResponse,
  setRegistrationResponse(): void {},
  clearRegistrationResponse(): void {},
  setEventRegistration(): void {},
};
