import useEventsStore from '@/features/Event/store/events.store';
import { useEffect } from 'react';

export const HomePage = () => {
  const readEvents = useEventsStore((store) => store.readAllEvents);
  const events = useEventsStore((store) => store.result);

  useEffect(() => {
    readEvents();
  }, []);

  return (
    <section className='flex flex-col gap-4 py-4'>
      <h3 className='font-bold'>Encontre um evento e aproveite</h3>
      <div className='from-neutral-950 flex flex-col gap-4 overflow-hidden'>
        {events?.data?.map((event) => (
          <div key={event.id} className='flex flex-col gap-2 border rounded'>
            <div>
              <img className='w-full rounded-t' src={event.bannerUrl} alt={`Banner do evento ${event.title}`} />
            </div>
            <div className='p-4'>
              <div className='flex flex-col gap-1 text-xs text-yellow-600 font-semibold'>
                <p>{event.startAt} {'>'} {event.endAt}</p>
              </div>
              <div>
                <h4 className='text-sm font-bold'>{event.title}</h4>            
              </div>
              <div>
                <p className='text-xs text-slate-500'>{event.local}</p>            
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
