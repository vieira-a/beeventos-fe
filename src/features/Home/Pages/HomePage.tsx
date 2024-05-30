import { Events } from '@/features/Event/components';

export const HomePage = () => {  

  return (
    <section className='flex flex-col gap-4 py-4'>
      <h3 className='font-bold'>Encontre um evento e aproveite</h3>
      <Events />
    </section>
  );
};
