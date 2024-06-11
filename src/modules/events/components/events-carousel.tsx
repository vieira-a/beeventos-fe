import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

import useEventsStore from '../store/events.store';

export const EventsCarousel = () => {
  const events = useEventsStore((store) => store.result);

  return (
    <Carousel>
      <CarouselContent>
        {events.data.map((event, index) => (
          <CarouselItem key={index}>
              <Card>
                <CardContent>
                  <img src={event.bannerUrl ? event.bannerUrl : 'https://cdn.uniacco.com/blog/wp-content/uploads/2021/06/02122221/stem-list-EVgsAbL51Rk-unsplash1-min-1024x576.jpg'} alt={`Imagem do evento ${event.title}`} className="object-cover rounded" />
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