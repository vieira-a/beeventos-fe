import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import useGetUserProfile from '@/modules/users/auth/hooks/useGetUserProfile';
import useSessionStore from '@/modules/users/auth/store/session.store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { CreateEventSchema, CreateEventSchemaType } from '../schemas';
import { EventService } from '../services/event.service';
import useCreateEventStore from '../store/create-event.store';

export function CreateEventForm() {
  useGetUserProfile();
  const { access_token, userId } = useSessionStore();
  const { setEventTypes, eventTypes, setCreateEventResponse, closeCreateEventDialog } = useCreateEventStore();

  useEffect(() => {
    setEventTypes(access_token)
  },[])

  const form = useForm<CreateEventSchemaType>({
    resolver: zodResolver(CreateEventSchema),
  });

  async function onSubmit(data: CreateEventSchemaType) {
    const createEventData = {
      ...data,
      userId: userId
    }
    
    const eventService = new EventService();
    const response = await eventService.createEvent(createEventData, access_token);
    setCreateEventResponse({
      message: await response.message,
      statusCode: await response.statusCode,
    })
  }

  const handleCloseCreateEventDialog = () => {
    closeCreateEventDialog()
  }
    
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Título do evento</FormLabel>
              <Input
                type="text"
                placeholder="Informe um título para o evento"
                onChange={field.onChange}
              />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="eventTypeId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categoria do evento</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma categoria de evento" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {eventTypes.data && eventTypes.data.map((type) => (
                    <SelectItem 
                      key={type.id}
                      value={type.id}
                    >
                      {type.description}
                    </SelectItem>  
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="about"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sobre o evento</FormLabel>
              <Textarea
                placeholder="Crie uma descrição para o evento"
                onChange={field.onChange}
              />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="local"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Local</FormLabel>
              <Input
                type="text"
                placeholder="Informe a localização"
                onChange={field.onChange}
              />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um status para o evento" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="idle">Não inciado</SelectItem>
                  <SelectItem value="started">Disponível</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="startAt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Inicia em</FormLabel>
              <Input
                type="datetime-local"
                placeholder="Data e hora de início"
                onChange={field.onChange}
              />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="endAt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Termina em</FormLabel>
              <Input
                type="datetime-local"
                placeholder="Data e hora do fim"
                onChange={field.onChange}
              />
            </FormItem>
          )}
        />
        <div className='flex gap-6'>
          <Button onClick={handleCloseCreateEventDialog} className="bg-slate-200 hover:bg-yellow-500 text-slate-900 w-full">
            Cancelar
          </Button>
          <Button className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 w-full">
            Salvar
          </Button>
        </div>
      </form>
    </Form>
  );
}
