import { API_URLS } from '@/common/constans/api-urls';

import { EventEvaluationData } from '../types/event-evaluation.types';

export class EventEvaluationService {
  async evaluateEvent(
    data: EventEvaluationData,
    eventId: string,
    token: string,
  ) {
    let url = `${API_URLS.EVENTS}/${eventId}/evaluations`;
    try {
      const response = await fetch(url.toString(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log('evaluateEvent', result);
      return result;
    } catch (error) {
      console.log('Erro ao avaliar evento' + error);
    }
  }
}
