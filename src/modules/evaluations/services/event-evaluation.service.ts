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
      const response = await fetch(url, {
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
      throw new Error('Erro ao avaliar evento' + error);
    }
  }

  async readAtendeeRegistrations(atendeeId: string, token: string) {
    let url = `${API_URLS.EVENTS}/registrations/${atendeeId}`;
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();

      return result;
    } catch (error) {
      throw new Error('Erro ao inscrever-se em evento' + error);
    }
  }

  async readEventEvaluations(eventId: string, token: string) {
    let url = `${API_URLS.EVALUATIONS}/${eventId}`;
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();

      return result;
    } catch (error) {
      throw new Error('Erro carregar avaliações do evento' + error);
    }
  }
}
