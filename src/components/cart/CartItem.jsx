import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../features/cart/cartSlice";

const CartItem = () => {
  const products = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  
  return (
    <div>
      {products
        ?.slice()
        .sort((a, b) => a.position - b.position)
        .map((product) => (
          <div
            key={product.id}
            className="my-3 shadow-lg text-white bg-[#315269] h-[100px] border-[1px] border-[#95A0A7] rounded-md items-center grid grid-cols-12 mx-1 md:mx-6"
          >
            {/* cart image  */}
            <div className="grid col-span-3">
              <img
                className="md:h-[90px] h-[50px] rounded-md ml-3"
                src={product.image}
                alt=""
              />
            </div>

            {/* item details  */}
            <div className="grid col-span-6 justify-start">
              <h1 className="md:font-bold text-sm md:text-base font-semibold text-center">
                {product.name}
              </h1>
              <p className="my-1">Price: ${product.price} </p>
              <p className="hidden md:block">Recipe : {product.recipe}</p>
            </div>

            {/* action  */}
            <div className="grid col-span-3 justify-center text-center mr-4">
              <h1 className="center font-semibold text-sm md:text-base md:font-bold">
                Quantity
              </h1>
              <div className="flex mt-3 mb-4">
                <button
                  onClick={() => dispatch(removeFromCart(product.id))}
                  className="border-l-[1px] border-b-[1px] border-t-[1px] rounded-l-md border-[#95A0A7] md:px-4 px-1 py-1 bg-red-400"
                >
                  -
                </button>
                <p className=" border-[1px] border-[#95A0A7] md:w-[80px] w-[30px] text-sm md:text-base text-center text-black bg-yellow-50">
                  {product.quantity}
                </p>
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className="border-r-[1px] border-b-[1px] border-t-[1px] rounded-r-md border-[#95A0A7] md:px-4 px-1 py-1 bg-green-400"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CartItem;
