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
import useCreateEventStore from '@/modules/events/store/create-event.store';
import useEventsStore from '@/modules/events/store/events.store';
import { EventFilterOptions } from '@/modules/events/types/filter-options.types';
import { useEffect, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function AdminEventsData() {
  const { openCreateEventDialog } = useCreateEventStore();
  const [searchParam, setSearchParam] = useState<EventFilterOptions>({title: ''});
  const { allEvents, readAllEvents } = useEventsStore();
  
  useEffect(() => {
    readAllEvents(searchParam);
  }, [searchParam]);

  const handleCreateEventDialog = () => {
    openCreateEventDialog()
  }
  
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParam({ title: event.target.value });
  };

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
