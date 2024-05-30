import { InputSearch } from '@/components/ui/input-search';
import useEventsStore from '@/features/Event/store/events.store';
import { useEffect, useState } from 'react';

import { EventFilterOptions } from '../types/filter-options.types';
import { EventCard } from './EventCard';

export const Events = () => {
  const [searchParam, setSearchParam] = useState<EventFilterOptions>({title: ''});
  const readEvents = useEventsStore((store) => store.readAllEvents);
  const events = useEventsStore((store) => store.result);

  useEffect(() => {
    readEvents(searchParam);
  }, [searchParam]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParam({ title: event.target.value });
  };


  return (
    <section className='flex flex-col gap-4'>
      <div className='flex flex-col gap-4'>
        <InputSearch 
          onChange={handleSearchChange}
        />
        <h3 className='font-bold'>Encontre um evento e aproveite</h3>
      </div>
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
    </section>
  )
}