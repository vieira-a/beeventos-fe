import { API_URLS } from '@/shared/constans/api-urls';

export class EventRegistrationService {
  async registration(eventId: string, atendeeId: string, token: string) {
    let url = `${API_URLS.EVENTS}/${eventId}/registrations`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ atendeeId }),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      return;
    }
  }
}
