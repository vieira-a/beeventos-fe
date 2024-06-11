import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';

import { CreateEventForm } from '../components/create-event-form';
import useShowCreateEventToast from '../hooks/useShowCreateEventToast';
import useCreateEventStore from '../store/create-event.store';

export function CreateEvent() {
  const { isCreateEventDialogOpen, closeCreateEventDialog } = useCreateEventStore();
  useShowCreateEventToast();

  return (
    <div>
      <Dialog open={isCreateEventDialogOpen} onOpenChange={closeCreateEventDialog} >
        <DialogContent className="sm:max-w-[425px] overflow-y-auto max-h-[80vh]">
          <DialogHeader>
            <DialogTitle>Novo evento</DialogTitle>
            <DialogDescription>
              Crie um novo evento.
            </DialogDescription>
          </DialogHeader>
            <div>
              <CreateEventForm />
            </div>
          <DialogFooter>
            <p className='text-xs'>
              Ao criar um novo evento, você concorda com as Condições de Uso da Beeventos.
            </p>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}