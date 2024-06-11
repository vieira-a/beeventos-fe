import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar } from '@/components/ui/avatar';

type EvaluationCommentsProps = {
  author: string;
  commentId: string;
  commentText: string;
  rating: number;
}

export function EvaluationComments( props: EvaluationCommentsProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={props.commentId}>
        <AccordionTrigger>{props.author}</AccordionTrigger>
        <AccordionContent>
          <div className='flex gap-2 justify-between'>
            <p className='italic'>{`"${props.commentText}"`}</p>
            <Avatar className='w-8 h-8 text-sm border border-yellow-500 text-slate-700 flex items-center justify-center'>
              <p>{props.rating}</p>
            </Avatar>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
