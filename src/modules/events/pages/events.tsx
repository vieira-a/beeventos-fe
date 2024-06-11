import { InputSearch } from '@/components/ui/input-search';
import { useEffect, useState } from 'react';
import { FaHandFist } from 'react-icons/fa6';

import { EventCard } from '../components/event-card';
import { EventsCarousel } from '../components/events-carousel';
import useEventsStore from '../store/events.store';
import { EventFilterOptions } from '../types/filter-options.types';

export const Events = () => {
  const [searchParam, setSearchParam] = useState<EventFilterOptions>({title: ''});
  const readEvents = useEventsStore((store) => store.readAvalibleEvents);
  const events = useEventsStore((store) => store.result);

  useEffect(() => {
    readEvents(searchParam);
  }, [searchParam]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParam({ title: event.target.value });
  };

  return (
    <section className='flex flex-col gap-6'>
    <div className='flex flex-col gap-6 justify-center'>
      <p className='text-xl flex'>Boas vindas ao&nbsp;<span className='font-bold text-yellow-500'>beeventos&nbsp;</span><FaHandFist className='text-2xl text-yellow-500'/></p>
    </div>
    <div className='flex flex-col gap-4'>
      <InputSearch 
        onChange={handleSearchChange}
      />
      <h4 className='font-bold'>Encontre um evento e aproveite</h4>
    </div>
    <EventsCarousel />
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