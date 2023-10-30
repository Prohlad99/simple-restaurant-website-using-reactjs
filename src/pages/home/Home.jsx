
import { Helmet } from 'react-helmet-async';
import { Fade, Flip, Zoom } from 'react-reveal';
import BistroBanner from '../../components/home/banner/bistro/BistroBanner';
import MenuBanner from '../../components/home/banner/menu/MenuBanner';
import Menu from '../../components/home/menu/Menu';
import Recommends from '../../components/home/recommends/Recommends';
import ItemSlider from '../../components/home/slider/ItemSlider';
import Testimonials from '../../components/home/testimonial/Testimonials';
import MenuHeader from '../../components/shared/menuHeader/MenuHeader';
import HeroCarousel from './../../components/home/herro/HeroCarousel';
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro-Boss | Home</title>
      </Helmet>
      <HeroCarousel />
      <MenuHeader title="From 11:00am to 10:00pm" subtitle="ORDER ONLINE" />
      <Fade top>
        <ItemSlider />
      </Fade>
      <Flip left>
        <BistroBanner />
      </Flip>
      <MenuHeader title="Check it out" subtitle="FROM OUR MENU" />
      <Zoom>
        <Menu />
      </Zoom>
      <MenuHeader title="Should Try" subtitle="CHEF RECOMMENDS" />
      <Fade left>
        <Recommends />
      </Fade>
      <Zoom>
        <div className="md:hidden">
          <MenuHeader title="Check it out" subtitle="FROM OUR MENU" />
        </div>
      </Zoom>
      <Zoom>
        <MenuBanner />
      </Zoom>
      <MenuHeader title="What Our Clients Say" subtitle="TESTIMONIALS" />
      {/* <Testimonial /> */}
      <Zoom>
        <Testimonials />
      </Zoom>
    </div>
  );
}

export default Home
