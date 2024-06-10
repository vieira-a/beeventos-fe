import { API_URLS } from '@/shared/constans/api-urls';

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
      return result;
    } catch (error) {
      console.log('Erro ao avaliar evento' + error);
    }
  }

  async readAtendeeRegistrations(atendeeId: string, token: string) {
    let url = `${API_URLS.EVENTS}/registrations/${atendeeId}`;
    try {
      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();

      return result;
    } catch (error) {
      console.log(
        'Erro ao carregar registro de participações em eventos' + error,
      );
    }
  }
}
