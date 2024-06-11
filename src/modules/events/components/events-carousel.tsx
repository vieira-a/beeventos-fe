import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

import useEventsStore from '../store/events.store';
import EventDefaultBanner from '/event-default.jpg';

export const EventsCarousel = () => {
  const events = useEventsStore((store) => store.result);

  return (
    <Carousel>
      <CarouselContent>
        {events.data.map((event, index) => (
          <CarouselItem key={index}>
              <Card>
                <CardContent>
                  <img src={event.bannerUrl ? event.bannerUrl : EventDefaultBanner} alt={`Imagem do evento ${event.title}`} className="object-cover rounded" />
                </CardContent>
              </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className='text-center m-8'>
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  )
}