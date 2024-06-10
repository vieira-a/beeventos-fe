import { Skeleton } from '@/components/ui/skeleton';
import { Link } from 'react-router-dom';

import { EventCardTypes } from '../types';

export const EventCard = ( props: EventCardTypes ) => {
  return (
    <div className='from-neutral-950 flex flex-col gap-4 overflow-hidden py-3'>
      <div key={props.id} className='flex flex-col gap-2 border rounded'>
        <div>
          {props.bannerUrl ? (
            <img className='w-full rounded-t' src={props.bannerUrl} alt={`Banner do evento ${props.title}`} />
          ) : (
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[200px] w-full rounded-t rounded-b-none" />
            </div>
          )}
        </div>
        <div className='p-4 flex flex-col gap-1'>
          <div className='flex flex-col text-xs text-yellow-600 font-semibold'>
            <p>{props.startAt} {'>'} {props.endAt}</p>
          </div>
          <div>
            <Link to={`/event/${props.id}`}>
              <h4 className='text-sm font-bold'>{props.title}</h4>            
            </Link>
          </div>
          <div>
            <p className='text-xs text-slate-500'>{props.local}</p>            
          </div>
        </div>
      </div>
    </div>
  )
}