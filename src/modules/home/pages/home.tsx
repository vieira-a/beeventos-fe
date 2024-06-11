import { Events } from '@/modules/events/pages';
import useGetUserProfile from '@/modules/users/auth/hooks/useGetUserProfile';

import { MenuHeader } from '../components/menu-header';
import HeroBanner from '/hero-banner.jpg';

export const Home = () => {  
  useGetUserProfile()
  
  return (
    <>
      <MenuHeader />
      <img src={HeroBanner} alt="Imagem do autitório da Universidade Católica do Salvador"/>
      <section className="p-8">
        <Events />
      </section>
    </>
  );
};
