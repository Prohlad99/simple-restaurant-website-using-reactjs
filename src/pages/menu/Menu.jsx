import { Helmet } from 'react-helmet-async';
import img1 from '../../assets/menu/banner3.jpg';
import dessert from '../../assets/menu/dessert-bg.jpeg';
import pizza from '../../assets/menu/pizza-bg.jpg';
import salad from '../../assets/menu/salad-bg.jpg';
import soup from '../../assets/menu/soup-bg.jpg';
import Banner from "../../components/shared/banner/Banner";
import MenuItems from '../../components/shared/menuItems/MenuItems';
import MenuHeader from './../../components/shared/menuHeader/MenuHeader';

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro-Boss | Menu</title>
      </Helmet>
      <Banner
        bgImg={img1}
        heading="OUR MENU"
        text="Would You Like To Try A Dish?"
        size="text-4xl"
      />
      <MenuHeader title="Don't Miss" subtitle="Today's Offer" />
      <MenuItems item="offered" count={4} />
      <Banner
        bgImg={dessert}
        heading="DESSERTS"
        text="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        size="text-xl"
      />
      <MenuItems item="dessert" count={6} />
      <Banner
        bgImg={pizza}
        heading="PIZZA"
        text="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        size="text-xl"
      />
      <MenuItems item="pizza" count={6} />
      <Banner
        bgImg={salad}
        heading="SALADS"
        text="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        size="text-xl"
      />
      <MenuItems item="salad" count={8} />
      <Banner
        bgImg={soup}
        heading="SOUPS"
        text="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        size="text-xl"
      />
      <MenuItems item="soup" count={6} />
    </div>
  );
}

export default Menu
