import { EventFilterOptions } from '../types/filter-options.types';

export class EventService {
  async readAvalibleEvents(filterOptions?: EventFilterOptions) {
    let url = `https://beeventos-be-production.up.railway.app/api/v1/events/avaliable`;

    if (filterOptions?.title) {
      url += `?title=${encodeURIComponent(filterOptions.title)}`;
    }

    try {
      const response = await fetch(
        `https://beeventos-be-production.up.railway.app/api/v1/events/avaliable`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

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

  async readAllEvents(filterOptions?: EventFilterOptions) {
    let url = 'https://beeventos-be-production.up.railway.app/api/v1/events';

    if (filterOptions?.title) {
      url += `?title=${encodeURIComponent(filterOptions.title)}`;
    }

    try {
      const response = await fetch(
        'https://beeventos-be-production.up.railway.app/api/v1/events',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

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
    //let url = `${API_URLS.EVENTS}/${id}`;
    try {
      const response = await fetch(
        `https://beeventos-be-production.up.railway.app/api/v1/events/${id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

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
    //let url = `${API_URLS.EVENTS_TYPES}`;
    try {
      const response = await fetch(
        'https://beeventos-be-production.up.railway.app/api/v1/events-types',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await response.json();
      console.log(data);

      return data;
    } catch (error) {
      return;
    }
  }

  async createEvent(data: any, token: string) {
    //let url = `${API_URLS.EVENTS}`;
    try {
      const response = await fetch(
        'https://beeventos-be-production.up.railway.app/api/v1/events',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        },
      );

      const result = await response.json();
      return result;
    } catch (error) {
      throw new Error(
        'Erro ao carregar registro de participações em eventos' + error,
      );
    }
  }

  async finishEvent(id: string, token: string) {
    try {
      const response = await fetch(
        `https://beeventos-be-production.up.railway.app/api/v1/events/${id}/finish`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const result = await response.json();
      return result;
    } catch (error) {
      throw new Error('Erro ao finalizar evento' + error);
    }
  }
}
