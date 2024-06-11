import { AdminEventsData } from '../../components/admin-events-data';
import useShowFinishEventToast from '../hooks/useShowFinishEventToast';

export const Admin = () => {
  useShowFinishEventToast()
  
  return (
    <section className='flex flex-col gap-4'>
      <AdminEventsData />
    </section>
  )
}