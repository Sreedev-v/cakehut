import React, { useContext } from "react";
import { Ctx } from "../context";
import { Link } from "react-router-dom";
import useRazorpay from "react-razorpay";

const Cart = () => {
  const { addToCart, removeFromCart, clearCart, totalPrice, cart } =
    useContext(Ctx);
  const emptyCart = (
    <div className="mx-auto my-[30px] text-center">
      <div className="container flex flex-col place-content-center m-auto w-full">
        <img
          src="https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-basket-clipart-flat-vector-illustration-of-wicker-basket-with-a-red-png-image_6798879.png"
          alt=""
          className="h-50 w-60 place-content-center m-auto"
        />
        <span className="text-[30px] text-amber-900">
          YOUR CART FEELS LIGHT !
        </span>
        <Link to="/">
          <button
            // onClick={() => removeFromCart(item.id)}
            onClick={clearCart}
            className="mt-[20px] m-auto w-[20%] bg-[#d97706] text-white py-[15px] rounded-[20px]"
          >
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
  return (
    <>
      {cart.length == 0 ? (
        emptyCart
      ) : (
        <div className="py-[40px] px-[80px] text-xl">
          <div className="text-center text-2xl text-[#d97706]">MY CART</div>
          <div className="flex justify-between px-4">
            {/* <div>Qauntity</div> */}
            <div className="pl-[50px]">Item</div>
            <div className="pr-[25px]">Price</div>
          </div>
          <div>
            {cart?.map((item) => {
              return (
                <div className="flex justify-between text-2xl items-center my-6 py-4 px-6 bg-browncol text-white rounded-[20px]">
                  <img className="w-[15%] rounded-[20px]" src={item.imgSrc} />
                  <div className="w-[40%]">{item?.name}</div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="w-[25%] bg-white text-browncol py-[15px] rounded-[20px] hover:bg-[#d97706] hover:text-white transition-all duration-300 ease-in-out"
                  >
                    Remove From Cart
                  </button>
                  <div className="w-[6%]">र {item.price}</div>
                </div>
              );
            })}
          </div>
          {console.log(cart)}
          <div className="text-2xl flex justify-between">
            <div className="pl-[35px]">Total Price</div>
            <div className="text-right pr-4">र {totalPrice}</div>
          </div>
          <button
            onClick={clearCart}
            className="mt-[20px] w-full bg-[#d97706] text-white py-[15px] rounded-[20px]"
          >
            Clear Your Cart
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
