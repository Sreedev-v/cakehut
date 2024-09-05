import React, { useContext } from "react";
import { Ctx } from "../context";

const data = [
  {
    id: 1,
    name: "ROYAL VELVET CAKE",
    alt: "cake",
    price: 920,
    imgSrc:
      "https://breadworld.in/uploads/product/images/10879436942845-facke-73.jpg",
  },
  {
    id: 2,
    name: "WHITE VANCHO CAKE",
    alt: "cake",
    price: 935,
    imgSrc:
      "https://breadworld.in/uploads/product/images/31751038509100-white-vancho.jpg",
  },
  {
    id: 3,
    alt: "cake",
    name: "IRISH COFEE CAKE",
    price: 795,
    imgSrc:
      "https://breadworld.in/uploads/product/images/84289559489218-irish-coffee-cake.jpg",
  },
  {
    id: 4,
    alt: "cake",
    name: "ROYAL VELVET CAKE",
    price: 920,
    imgSrc:
      "https://breadworld.in/uploads/product/images/10879436942845-facke-73.jpg",
  },
  {
    id: 5,
    alt: "cake",
    name: "CHOCOLATE TRUFFLE",
    price: 875,
    imgSrc:
      "https://breadworld.in/uploads/product/images/3991254253394-chocolate-truffle-cake.jpg",
  },
  {
    id: 6,
    alt: "cake",
    name: "WHITE VANCHO CAKE",
    price: 935,
    imgSrc:
      "https://breadworld.in/uploads/product/images/31751038509100-white-vancho.jpg",
  },
  {
    id: 7,
    alt: "cake",
    name: "IRISH COFEE CAKE",
    price: 795,
    imgSrc:
      "https://breadworld.in/uploads/product/images/84289559489218-irish-coffee-cake.jpg",
  },
  {
    id: 8,
    alt: "cake",
    name: "CHOCOLATE TRUFFLE",
    price: 875,
    imgSrc:
      "https://breadworld.in/uploads/product/images/3991254253394-chocolate-truffle-cake.jpg",
  },
  {
    id: 9,
    name: "ROYAL VELVET CAKE",
    alt: "cake",
    price: 920,
    imgSrc:
      "https://breadworld.in/uploads/product/images/10879436942845-facke-73.jpg",
  },
  {
    id: 10,
    name: "WHITE VANCHO CAKE",
    alt: "cake",
    price: 935,
    imgSrc:
      "https://breadworld.in/uploads/product/images/31751038509100-white-vancho.jpg",
  },
  {
    id: 11,
    alt: "cake",
    name: "IRISH COFEE CAKE",
    price: 795,
    imgSrc:
      "https://breadworld.in/uploads/product/images/84289559489218-irish-coffee-cake.jpg",
  },
  {
    id: 12,
    alt: "cake",
    name: "ROYAL VELVET CAKE",
    price: 920,
    imgSrc:
      "https://breadworld.in/uploads/product/images/10879436942845-facke-73.jpg",
  },
  {
    id: 13,
    alt: "cake",
    name: "CHOCOLATE TRUFFLE",
    price: 875,
    imgSrc:
      "https://breadworld.in/uploads/product/images/3991254253394-chocolate-truffle-cake.jpg",
  },
  {
    id: 14,
    alt: "cake",
    name: "WHITE VANCHO CAKE",
    price: 935,
    imgSrc:
      "https://breadworld.in/uploads/product/images/31751038509100-white-vancho.jpg",
  },
  {
    id: 15,
    alt: "cake",
    name: "IRISH COFEE CAKE",
    price: 795,
    imgSrc:
      "https://breadworld.in/uploads/product/images/84289559489218-irish-coffee-cake.jpg",
  },
  {
    id: 16,
    alt: "cake",
    name: "CHOCOLATE TRUFFLE",
    price: 875,
    imgSrc:
      "https://breadworld.in/uploads/product/images/3991254253394-chocolate-truffle-cake.jpg",
  },
];

const Cakes = () => {
  const { removeFromCart, addToCart, showMessage, messageType, isInCart } =
    useContext(Ctx);
  return (
    <div>
      {showMessage && (
        <>
          {messageType === "added" ? (
            <div className="bg-green-700 text-2xl text-white fixed px-[50px] py-3 rounded-[20px] transform -translate-x-1/2 left-1/2 top-[25px] z-10">
              Item added to Cart
            </div>
          ) : (
            <div className="bg-red-700 text-2xl text-white fixed px-[50px] py-3 rounded-[20px] transform -translate-x-1/2 left-1/2 top-[25px] z-10">
              Item removed from Cart
            </div>
          )}
        </>
      )}

      <div className="flex gap-[30px] justify-center my-[20px]">
        <div className="bg-black w-[70px] h-[3px] align-middle my-auto"></div>
        <h1 className="text-center text-[#d97706]" style={{ fontSize: "40px" }}>
          CAKES
        </h1>
        <div className="bg-black w-[70px] h-[3px] align-middle my-auto"></div>
      </div>
      <div className="flex w-full justify-around my-6">
        <div>{data?.length} Products</div>
        <div>
          <select className="cursor-pointer">
            <option>Low to High</option>
            <option>High to Low</option>
          </select>
        </div>
      </div>
      <div className=" flex flex-wrap justify-center">
        {data?.map((item) => {
          return (
            <div className="w-1/4 text-center mb-10 cursor-pointer">
              <div className="relative mb-7">
                <img
                  className="block w-3/5 mx-auto mb-5 rounded-[20px] p-[10px] hover:p-0 transition-p duration-200 ease-in-out"
                  src={item?.imgSrc}
                />
                {!isInCart(item.id) ? (
                  <img
                    style={{ bottom: "-27px", margin: "auto" }}
                    className="absolute left-36 w-1/6"
                    src="https://breadworld.in/frontent/images/shopicon.png"
                    onClick={() => addToCart(item)}
                  />
                ) : (
                  <img
                    style={{ bottom: "-27px", margin: "auto" }}
                    onClick={() => removeFromCart(item.id)}
                    className="absolute left-36 w-1/6"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWW7rP7eJ09DrpjN0_hCJFs_B6kt0nESexSw&s"
                  />
                )}
              </div>
              <div className="mt-7 text-browncol">{item?.name}</div>
              <h4 className="text-amber-500 text-2xl my-2">र{item.price}/Kg</h4>
              <p className="font-normal text-xs text-slate-500">
                Inclusive of GST
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cakes;
