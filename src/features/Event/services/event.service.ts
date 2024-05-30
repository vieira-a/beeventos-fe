import { API_URLS } from '@/common/constans/api-urls';

import { EventFilterOptions } from '../types/filter-options.types';

export class EventService {
  async readAllEvents(filterOptions?: EventFilterOptions) {
    let url = API_URLS.EVENTS;

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
}
