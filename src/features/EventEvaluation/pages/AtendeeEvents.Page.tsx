import { EventHeader } from '@/features/Event/components/Header';

import { AtendeeEventsData } from '../components/AtendeeEventsData';

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