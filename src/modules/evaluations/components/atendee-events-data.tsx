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
import useGetUserProfile from '@/modules/users/auth/hooks/useGetUserProfile';
import useSessionStore from '@/modules/users/auth/store/session.store';
import { useEffect } from 'react';
import { BiSolidMessageCheck } from 'react-icons/bi';
import { Link } from 'react-router-dom';

import useEventEvaluationStore from '../store/event-evaluation.store';


export function AtendeeEventsData() {
  useGetUserProfile()
  const userId = useSessionStore((store) => store.userId)
  const access_token = useSessionStore((store) => store.access_token);
  const setAtendeeRegistrations = useEventEvaluationStore(
      (store) => store.setAtendeeRegistrations,
    );
  const atendeeRegistrations = useEventEvaluationStore(
    (store) => store.result,
  );

  useEffect(() => {  
    if(userId && access_token) {
      setAtendeeRegistrations(userId, access_token)
    }
  }, [userId, access_token])

  return (
    <Table>
      <TableCaption>Eventos que você participa</TableCaption>
      <TableHeader className='text-xs uppercase'>
        <TableRow>
          <TableHead>Data</TableHead>
          <TableHead>Evento</TableHead>
          <TableHead>Local</TableHead>
          <TableHead className="text-left">Avaliar</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className='text-xs'>
        {atendeeRegistrations && atendeeRegistrations.data.map((registration) => (
          <TableRow key={registration.id}>
            <TableCell className="font-medium">{registration.createdAt.split(',')[0]}</TableCell>
            <TableCell>{registration.event.title}</TableCell>
            <TableCell>{registration.event.local}</TableCell>
            {registration.event.status === 'finished' ? (
               <TableCell>
                <Link to={`/evaluations/${registration.event.id}`}>
                  <BiSolidMessageCheck className='text-2xl text-green-500 hover:text-green-400' />
                </Link>
               </TableCell>
            ) : (
              <TableCell>
                Não finalizado
               </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          
        </TableRow>
      </TableFooter>
    </Table>
  )
}
