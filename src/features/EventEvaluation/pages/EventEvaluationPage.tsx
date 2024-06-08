import { EventHeader } from '@/features/Event/components/Header';

import { EventEvaluationForm } from '../components/EventEvaluationForm';

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