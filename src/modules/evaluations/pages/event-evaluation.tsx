import { EventHeader } from '@/modules/events/components/event-header';

import { EventEvaluationForm } from '../components/event-evaluation-form';

export function EventEvaluation () {
  return (
    <>
    <EventHeader />
    <section className='flex flex-col gap-6 p-3'>
      <div className='mt-3 w-[75%]'>
        <h2>Sua avaliação é muito importante para nós!</h2>
      </div>
      <EventEvaluationForm />
    </section>
    </>
  )
}