export type EvaluationState = {
  data: EventEvaluationData;
  setEvaluationData: (data: EventEvaluationData) => void;
};

export type EventEvaluationData = {
  atendeeId?: string;
  rating: number;
  comment?: string;
  anonymous?: boolean;
};

export const initialEventEvaluationData: EventEvaluationData = {
  rating: 0,
  comment: '',
  anonymous: false,
};
