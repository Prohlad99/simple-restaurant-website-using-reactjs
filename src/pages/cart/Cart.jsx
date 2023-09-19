import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import OrderSummary from "../../components/cart/OrderSummary";
import CartItem from "./../../components/cart/CartItem";
import EmptyCart from "./../../components/cart/EmptyCart";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div>
      <Helmet>
        <title>Bistro-Boss | Cart</title>
      </Helmet>
      {cart?.length ? (
        <div className="grid md:grid-cols-12 grid-cols-1  pt-[80px] md:h-[100vh] h-auto mb-4 justify-center">
          {/* cart item  */}
          <div className="grid md:col-span-8 col-span-full h-[400px] md:h-[500px] overflow-scroll">
            <div>
              <CartItem />
            </div>
          </div>

          {/* order summery  */}
          <div className="gird md:col-span-4 col-span-full justify-self-center">
            <div className="">
              <OrderSummary />
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
