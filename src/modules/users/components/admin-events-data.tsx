import { Button } from '@/components/ui/button';
import { InputSearch } from '@/components/ui/input-search';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { EventHeader } from '@/modules/events/components';
import { EventService } from '@/modules/events/services/event.service';
import useCreateEventStore from '@/modules/events/store/create-event.store';
import useEventsStore from '@/modules/events/store/events.store';
import { EventFilterOptions } from '@/modules/events/types/filter-options.types';
import { useEffect, useState } from 'react';
import { FaEye, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import useSessionStore from '../auth/store/session.store';

export function AdminEventsData() {
  const { openCreateEventDialog, setFinishEventResponse } = useCreateEventStore();
  const [searchParam, setSearchParam] = useState<EventFilterOptions>({title: ''});
  const { allEvents, readAllEvents } = useEventsStore();
  const access_token = useSessionStore((store) => store.access_token);
  
  useEffect(() => {
    readAllEvents(searchParam);
  }, [searchParam]);

  const handleCreateEventDialog = () => {
    openCreateEventDialog()
  }
  
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParam({ title: event.target.value });
  };

  const handleFinishEvent = async (id: string) => {
    const eventService = new EventService();
    const result = await eventService.finishEvent(id, access_token)
    if (result) {
      setFinishEventResponse({
        statusCode: result.statusCode,
        message: result.message
      })
    }
  }

  return (
    <>
    <EventHeader />
    <section className='flex flex-col gap-6 p-3'>
      <section className='flex flex-col gap-6'>
        <div>
          <h3 className='font-bold'>Painel do organizador</h3>
        </div>
        <div>
          <InputSearch onChange={handleSearchChange}/>
        </div>
        <div>
          <Button className="bg-yellow-500 hover:bg-yellow-400 text-slate-900" onClick={handleCreateEventDialog}>Criar evento</Button>
        </div>
      </section>

      <section>
        <Table>
          <TableCaption>Todos os eventos registrados</TableCaption>
          <TableHeader className='text-xs uppercase'>
            <TableRow>
              <TableHead>Data</TableHead>
              <TableHead>Evento</TableHead>
              <TableHead>Local</TableHead>
              <TableHead>Avaliações</TableHead>
              <TableHead>Finalizar</TableHead>
            </TableRow>
          </TableHeader >
          <TableBody className='text-xs'>
            {allEvents && allEvents.data.map((event) => (
              <TableRow key={event.id}>
                <TableCell className="font-medium">{event.createdAt.split(',')[0]}</TableCell>
                <TableCell>{event.title}</TableCell>
                <TableCell>{event.local}</TableCell>
                <TableCell className='text-right'>
                  <Link to={`/event/${event.id}/evaluations`}>
                    <FaEye className='text-xl text-yellow-500'/>
                  </Link>
                </TableCell>
                <TableCell className='text-right'>
                  <FaLock onClick={() => handleFinishEvent(event.id)} className='text-xl text-yellow-500 cursor-pointer'/>
                </TableCell>
              </TableRow>
            ))}

          </TableBody>
          <TableFooter>
          </TableFooter>
        </Table>
      </section>
    </section>
    </>
  )
}
