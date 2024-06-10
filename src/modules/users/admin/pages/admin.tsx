import { Button } from '@/components/ui/button';
import useCreateEventStore from '@/modules/events/store/create-event.store';

export const Admin = () => {
  const { openCreateEventDialog } = useCreateEventStore();
  const handleCreateEventDialog = () => {
    openCreateEventDialog()
  }

  return (
    <Button
      onClick={handleCreateEventDialog}
    >Criar evento</Button>
  )
}