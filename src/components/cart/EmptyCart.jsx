import React from "react";
import emptyCart from "../../assets/images/empty_cart.png";
const EmptyCart = () => {
  return (
    <div>
      {/* container  */}
      <div className="grid justify-items-center h-[100vh] items-center justify-center">
        <div className="flex justify-center flex-col items-center">
          <img className="h-[200px] mt-10" src={emptyCart} alt="" />
          <h1 className="dm:text-2xl my-4 text-red-400">
            Sorry, Your Cart is Empty. Nothing to Show.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
