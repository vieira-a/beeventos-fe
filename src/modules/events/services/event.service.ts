import { API_URLS } from '@/shared/constans/api-urls';

import { EventFilterOptions } from '../types/filter-options.types';

export class EventService {
  async readAllEvents(filterOptions?: EventFilterOptions) {
    let url = `${API_URLS.EVENTS}/avaliable`;

    if (filterOptions?.title) {
      url += `?title=${encodeURIComponent(filterOptions.title)}`;
    }

    try {
      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (!data && !data.result) {
        return;
      }
      return data.result;
    } catch (error) {
      return;
    }
  }

  async readEventById(id: string) {
    let url = `${API_URLS.EVENTS}/${id}`;
    try {
      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (!data && !data.result) {
        return;
      }
      return data;
    } catch (error) {
      return;
    }
  }

  async readEventsTypes(token: string) {
    let url = `${API_URLS.EVENTS_TYPES}`;
    try {
      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('EventsTypes > ', data);

      return data;
    } catch (error) {
      return;
    }
  }

  async createEvent(data: any, token: string) {
    let url = `${API_URLS.EVENTS}`;
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
      console.log(
        'Erro ao carregar registro de participações em eventos' + error,
      );
    }
  }
}
