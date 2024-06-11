export type CreateEventResponse = {
  statusCode: number | undefined;
  message: string | undefined;
};

export type FinishEventResponse = {
  statusCode: number | undefined;
  message: string | undefined;
};

export type CreateEventData = {
  title: string;
  about: string;
  local: string;
  status: string;
  startAt: string;
  endAt: string;
};

export type CreateEventState = {
  createEventData: CreateEventData;
  createEventResponse: CreateEventResponse;
  finishEventResponse: FinishEventResponse;
  isCreateEventDialogOpen: boolean;
  eventTypes: EventsTypesData;
  setEventTypes: (access_token: string) => void;
  setCreateEventResponse: (response: CreateEventResponse) => void;
  clearCreateEventResponse: () => void;
  setFinishEventResponse: (response: FinishEventResponse) => void;
  clearFinishEventResponse: () => void;
  openCreateEventDialog: () => void;
  closeCreateEventDialog: () => void;
};

export type EventsTypesData = {
  data: EventTypes[];
};

export type EventTypes = {
  id: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export const initialCreateEventResponse: CreateEventResponse = {
  message: undefined,
  statusCode: undefined,
};

export const initialCreateFinishEventResponse: FinishEventResponse = {
  message: undefined,
  statusCode: undefined,
};

export const initialCreateEventData: CreateEventData = {
  title: '',
  about: '',
  local: '',
  status: '',
  startAt: '',
  endAt: '',
};

export const initialEventTypes: EventTypes = {
  id: '',
  description: '',
  createdAt: '',
  updatedAt: '',
};

export const initialEventsTypesData: EventsTypesData = {
  data: [],
};

export const inicialCreateEventState: CreateEventState = {
  createEventData: initialCreateEventData,
  createEventResponse: initialCreateEventResponse,
  finishEventResponse: initialCreateFinishEventResponse,
  isCreateEventDialogOpen: false,
  eventTypes: initialEventsTypesData,
  setEventTypes: () => void {},
  setCreateEventResponse: () => void {},
  clearCreateEventResponse: () => void {},
  setFinishEventResponse: () => void {},
  clearFinishEventResponse: () => void {},
  openCreateEventDialog: () => void {},
  closeCreateEventDialog: () => void {},
};
