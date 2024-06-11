import { Events } from '@/modules/events/pages';

import { MenuHeader } from '../components/menu-header';

export const Home = () => {  

  return (
    <>
      <MenuHeader />
      <section className="p-8">
        <Events />
      </section>
    </>
  );
};
