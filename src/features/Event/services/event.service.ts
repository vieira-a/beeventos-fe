import { API_URLS } from '@/common/constans/api-urls';

import { EventsResult } from '../types/events-types';

export class EventService {
  async readAllEvents(): Promise<EventsResult> {
    try {
      const response = await fetch(API_URLS.EVENTS, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response) {
        throw new Error('Erro na tentativa de obter eventos');
      }

      const data = await response.json();

      return data.result;
    } catch (error) {
      throw new Error('Erro ao obter dados de eventos: ' + error);
    }
  }
}
