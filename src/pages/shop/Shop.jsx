import { Helmet } from 'react-helmet-async';
import img from '../../assets/shop/banner2.jpg';
import Banner from "../../components/shared/banner/Banner";
import CategoryWiseProducts from '../../components/shop/category_wise_products/CategoryWiseProducts';
const Shop = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro-Boss | Shop</title>
      </Helmet>
      <Banner
        bgImg={img}
        heading="OUR SHOP"
        text="Would You Like To Try A Dish?"
        size="text-4xl"
      />
      <CategoryWiseProducts />
    </div>
  );
}

export default Shop
