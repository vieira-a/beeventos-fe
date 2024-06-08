import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { CiClock2, CiLocationOn } from 'react-icons/ci';
import { useParams } from 'react-router-dom';

import useEventsStore from '../store/events.store';

export const EventPage = () => {
  const { id } = useParams();
  const readEventById = useEventsStore((store) => store.readEventById);
  const event = useEventsStore((store) => store.event);

  useEffect(() => {
    if (id) {
      readEventById(id);
    }
  }, [id]);

  return (
    <div className="min-h-screen flex flex-col relative">
      <section className="flex flex-col gap-3 border-b">
        <div>
          <img src={event.bannerUrl} alt={`Banner do evento ${event.title}`} />
        </div>
        <div className="flex flex-col gap-3 p-3">
          <div>
            <h3 className="font-semibold text-slate-600">{event.title}</h3>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <CiClock2 />
              <p className="text-xs text-slate-600 font-semibold">
                {event.startAt} {'>'} {event.endAt}
              </p>
            </div>
            <div className="flex gap-2">
              <CiLocationOn />
              <p className="text-xs text-slate-600 font-semibold">{event.local}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3 p-3 border-b">
        <div>
          <h5>Sobre o evento</h5>
        </div>
        <p className="text-xs text-slate-600">{event.about}</p>
      </section>

      <section className="fixed bottom-0 left-0 w-full p-3 border-t bg-white">
        <Button
          className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 w-full text-xs font-semibold tracking-wider"
        >
          PARTICIPAR
        </Button>
      </section>
    </div>
  );
};
