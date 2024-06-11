import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import useEventsStore from '@/modules/events//store/events.store';
import useGetUserProfile from '@/modules/users/auth/hooks/useGetUserProfile';
import useSessionStore from '@/modules/users/auth/store/session.store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import { EventEvaluationSchema, EventEvaluationSchemaType } from '../schema';
import { EventEvaluationService } from '../services/event-evaluation.service';
import useEventEvaluationStore from '../store/event-evaluation.store';
import { EventEvaluationData } from '../types/event-evaluation.types';

export function EventEvaluationForm() {
  useGetUserProfile()
  const { id } = useParams();
  const readEventById = useEventsStore((store) => store.readEventById);
  const userId = useSessionStore((store) => store.userId)
  const access_token = useSessionStore((store) => store.access_token);
  const {setEvaluationData, setEvaluationResponse } = useEventEvaluationStore()
 
  const form = useForm<EventEvaluationSchemaType>({
    resolver: zodResolver(EventEvaluationSchema),
  });

  useEffect(() => {
    if (id) {
      readEventById(id);
    }
  }, [id]);

  async function onSubmit(data: EventEvaluationSchemaType) {
    const eventEvaluationService = new EventEvaluationService();

    let evaluationData: EventEvaluationData;

    if(data.anonymous) {
      evaluationData = {
        ...data,
        anonymous: true,
      }
    } else {
      evaluationData = {
        ...data,
        atendeeId: userId,
        anonymous: false
      }
    }

    setEvaluationData(evaluationData)

    if (id) {
      const response = await eventEvaluationService.evaluateEvent(evaluationData, id, access_token);
      setEvaluationResponse({
        statusCode: await response.statusCode,
        message: await response.message
      })
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <FormField
          control={form.control}
          name="anonymous"
          render={({ field }) => (
            <FormItem className='flex gap-2 items-center'>
              <FormLabel 
                className='mt-2'
                htmlFor='anonymous'>Avaliação anônima?
              </FormLabel>
              <Checkbox 
                checked={field.value}
                onCheckedChange={field.onChange}
                id="anonymous"
              />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comentários:</FormLabel>
              <Textarea
                placeholder="Deixe um comentário"
                onChange={field.onChange}
              />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem className='flex flex-col gap-2'>
              <FormLabel>Qual a sua nota para o evento?</FormLabel>
              <RadioGroup className='flex flex-col gap-3'
                onValueChange={(value) => field.onChange(Number(value))}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value='1' id="r1"/>
                  <Label htmlFor="r1">1</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="2" id="r2" />
                  <Label htmlFor="r2">2</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="3" id="r3" />
                  <Label htmlFor="r3">3</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="4" id="r4" />
                  <Label htmlFor="r4">4</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="5" id="r5" />
                  <Label htmlFor="r5">5</Label>
                </div>
              </RadioGroup>
            </FormItem>
          )}
        />
        <section className="fixed bottom-0 left-0 w-full p-3 border-t bg-white">
          <Button className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 w-full">
            Salvar
          </Button>
        </section>
      </form>
    </Form>
  );
}