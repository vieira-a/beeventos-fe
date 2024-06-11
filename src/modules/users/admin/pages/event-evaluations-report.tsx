import { Avatar } from '@/components/ui/avatar';
import { EvaluationComments } from '@/modules/evaluations/components/evaluation-comments';
import useShowEventEvaluationToast from '@/modules/evaluations/hooks/useShowEventEvanluationToast';
import useEventEvaluationStore from '@/modules/evaluations/store/event-evaluation.store';
import { EventHeader } from '@/modules/events/components';
import useEventsStore from '@/modules/events/store/events.store';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useGetUserProfile from '../../auth/hooks/useGetUserProfile';
import useSessionStore from '../../auth/store/session.store';

export const EventEvaluationsReport = () => {
  useGetUserProfile()
  useShowEventEvaluationToast()
  const { id } = useParams();
  const readEventById = useEventsStore((store) => store.readEventById)
  const event = useEventsStore((store) => store.event)
  const access_token = useSessionStore((store) => store.access_token);
  const { setEventEvaluations, eventEvaluations } = useEventEvaluationStore();

  useEffect(() => {
    if(id) {
      readEventById(id)
      setEventEvaluations(id, access_token)
    }
  }, [id])

  return (
    <>
      <EventHeader />
      <section>
        {event && (
          <div>
            <img src={event.bannerUrl ? event.bannerUrl : 'https://cdn.uniacco.com/blog/wp-content/uploads/2021/06/02122221/stem-list-EVgsAbL51Rk-unsplash1-min-1024x576.jpg'} alt={`Banner do evento ${event.title}`} />
          </div>
        )}
      </section>
      <section className='flex flex-col gap-6 p-3'>
        
        <section>
          <h3>{event.title}</h3>
          <p className='text-xs'>{event.startAt} {'>'} {event.endAt}</p>
        </section>

        <section className='flex flex-col gap-6 items-center'>
          <Avatar className='w-28 h-28 text-4xl border-2 border-yellow-500 text-slate-700 flex items-center justify-center'>
            <p>{eventEvaluations.data.average}</p>
          </Avatar>
          <p className='text-xs'>Média das avaliações</p>
        </section>
        
        <section>
          <h3>Comentários</h3>
          {eventEvaluations.data.evaluations?.map((evaluation) => (
            <EvaluationComments
            key={evaluation.id}
            commentId={evaluation.id}
            author={evaluation.atendee}
            commentText={evaluation.comment}
            rating={evaluation.rating}
          />
          ))}
        </section>

      </section> 
    </>
  )
}