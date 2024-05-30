import { EventCardTypes } from '../types';

export const EventCard = ( props: EventCardTypes ) => {
  return (
    <div className='from-neutral-950 flex flex-col gap-4 overflow-hidden'>
      <div key={props.id} className='flex flex-col gap-2 border rounded'>
        <div>
          <img className='w-full rounded-t' src={props.bannerUrl} alt={`Banner do evento ${props.title}`} />
        </div>
        <div className='p-4 flex flex-col gap-1'>
          <div className='flex flex-col text-xs text-yellow-600 font-semibold'>
            <p>{props.startAt} {'>'} {props.endAt}</p>
          </div>
          <div>
            <h4 className='text-sm font-bold'>{props.title}</h4>            
          </div>
          <div>
            <p className='text-xs text-slate-500'>{props.local}</p>            
          </div>
        </div>
      </div>
    </div>
  )
}