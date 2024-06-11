import { Button } from '@/components/ui/button';
import useShowRegistrationToast from '@/modules/registration/hooks/useShowRegistrationToast';
import useEventRegistrationStore from '@/modules/registration/store/event-registration.store';
import useGetUserProfile from '@/modules/users/auth/hooks/useGetUserProfile';
import useLoginStore from '@/modules/users/auth/store/auth.store';
import useSessionStore from '@/modules/users/auth/store/session.store';
import { useEffect } from 'react';
import { CiClock2, CiLocationOn } from 'react-icons/ci';
import { Link, useParams } from 'react-router-dom';

import { EventHeader } from '../components/event-header';
import useEventsStore from '../store/events.store';
import EventDefaultBanner from '/event-default.jpg';

export const EventPage = () => {
  useGetUserProfile();
  useShowRegistrationToast();
  const { id } = useParams();
  const readEventById = useEventsStore((store) => store.readEventById);
  const event = useEventsStore((store) => store.event);
  const openLoginDialog = useLoginStore((store) => store.openLoginDialog)
  const closeLoginDialog = useLoginStore((store) => store.closeLoginDialog)
  const isLogged = useSessionStore((store) => store.isLogged);
  const userId = useSessionStore((store) => store.userId);
  const access_token = useSessionStore((store) => store.access_token);
  const setEventRegistration = useEventRegistrationStore((store) => store.setEventRegistration)

  useEffect(() => {
    if (id) {
      readEventById(id);
    }
  }, [id]);

  useEffect(() => {
    if(isLogged) {
      closeLoginDialog()
    } 
  }, [isLogged])

  const handleEventRegistration = () => {
    if (!isLogged) {
      openLoginDialog()
    }
    if (id && userId && access_token) {
      setEventRegistration(id, userId, access_token)
    }
  }

  return (
    <div className="min-h-screen flex flex-col relative">
      <EventHeader />
      <section className="flex flex-col gap-3 border-b">
        <div>
          <img src={event.bannerUrl ? event.bannerUrl : EventDefaultBanner} alt={`Banner do evento ${event.title}`} />
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

      <section className="flex flex-col gap-3 p-3">
        <div>
          <h5>Sobre o evento</h5>
        </div>
        <p className="text-sm text-slate-600">{event.about}</p>
      </section>

      <section className="fixed bottom-0 left-0 w-full p-3 border-t bg-white">
        <Button
          onClick={handleEventRegistration}
          className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 w-full text-xs font-semibold tracking-wider"
        >
          PARTICIPAR
        </Button>
      </section>
      <section className="Left-0 w-full p-6 border-t bg-white text-center">
        <Link to={`/evaluations/${id}`}>
          <h4 className='text-sm font-bold'>AVALIAR</h4>            
        </Link>
      </section>
    </div>
  );
};
