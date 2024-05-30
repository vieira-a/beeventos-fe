import useEventsStore from '@/features/Event/store/events.store';
import { useEffect } from 'react';

import { EventCard } from './EventCard';

export const Events = () => {
  const readEvents = useEventsStore((store) => store.readAllEvents);
  const events = useEventsStore((store) => store.result);

  useEffect(() => {
    readEvents();
  }, []);

  return (
    <div>
      {events?.data?.map((item) => (
        <EventCard
          key={item.id}
          id={item.id}
          bannerUrl={item.bannerUrl}
          startAt={item.startAt}
          endAt={item.endAt}
          title={item.title}
          local={item.local}
        />
      ))}
    </div>
    
  )
}