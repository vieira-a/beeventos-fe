import { DialogAlert } from '@/components/AlertDialog/alert-dialog';
import { Button } from '@/components/ui/button';
import useEventRegistrationStore from '@/features/EventRegistration/store/event-registration.store';
import useLoginDialogStore from '@/features/Login/store/login-dialog.store';
import useSessionStore from '@/features/Login/store/session.store';
import useGetUserProfile from '@/hooks/useGetUserProfile';
import { useEffect, useState } from 'react';
import { CiClock2, CiLocationOn } from 'react-icons/ci';
import { useParams } from 'react-router-dom';

import { EventHeader } from '../components/Header';
import useEventsStore from '../store/events.store';

export const EventPage = () => {
  useGetUserProfile();
  const { id } = useParams();
  const readEventById = useEventsStore((store) => store.readEventById);
  const event = useEventsStore((store) => store.event);
  const openLoginDialog = useLoginDialogStore((store) => store.openLoginDialog)
  const closeLoginDialog = useLoginDialogStore((store) => store.closeLoginDialog)
  const isLogged = useSessionStore((store) => store.isLogged);
  const userId = useSessionStore((store) => store.userId);
  const access_token = useSessionStore((store) => store.access_token);
  const setEventRegistration = useEventRegistrationStore((store) => store.setEventRegistration)
  const message = useEventRegistrationStore((store) => store.message);
  const [showDialog, setShowDialog] = useState(false);

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
    setShowDialog(true)
  }

  return (
    <div className="min-h-screen flex flex-col relative">
      <EventHeader />
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
      <section className="w-full">
        {message && (
          <DialogAlert message={message} open={showDialog} onClose={() => setShowDialog(false)}/>
        )}
        {/* <AlertDialog>
          {message && statusCode !== 201 ? (
          <Alert variant={'destructive'}>
            <AlertTitle>Atenção</AlertTitle>
            <AlertDescription>
              {message}
            </AlertDescription>
          </Alert>
          ) : (
            <Alert variant={'default'}>
            <AlertTitle>Atenção</AlertTitle>
            <AlertDescription>
              {message}
            </AlertDescription>
          </Alert>
          )}
        </AlertDialog> */}
        
      </section>
    </div>
  );
};
