export class EventRegistrationService {
  async registration(eventId: string, atendeeId: string, token: string) {
    //let url = `${API_URLS.EVENTS}/${eventId}/registrations`;
    try {
      const response = await fetch(
        `https://beeventos-be-production.up.railway.app/api/v1/events/${eventId}/registrations`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ atendeeId }),
        },
      );

      const data = await response.json();
      return data;
    } catch (error) {
      return;
    }
  }
}
