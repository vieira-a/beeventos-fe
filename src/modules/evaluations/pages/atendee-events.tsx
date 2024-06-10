import { EventHeader } from '@/modules/events/components/event-header';

import { AtendeeEventsData } from '../components/atendee-events-data';

export function AtendeeEventsPage() {
  return (
    <>
      <EventHeader />
      <section className='flex flex-col gap-6 py-6 px-3'>
        <h3>Meus eventos</h3>
        <AtendeeEventsData />
      </section>
    </>
  )
}