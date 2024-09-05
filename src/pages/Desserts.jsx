import React, { useContext } from "react";
import { Ctx } from "../context";

const data = [
  {
    id: 20,
    name: "BANOFFEE HIGH",
    alt: "cake",
    price: 150,
    imgSrc:
      "https://theobroma.in/cdn/shop/files/BanoffeeHigh_400x400.jpg?v=1711514542",
  },
  {
    id: 21,
    name: "CHOCOLATE CUPCATE",
    alt: "cake",
    price: 120,
    imgSrc:
      "https://theobroma.in/cdn/shop/files/ChocolateCupcake_400x400.jpg?v=1711514719",
  },
  {
    id: 22,
    alt: "cake",
    name: "CHOCOLATE MOUSSE CUP",
    price: 155,
    imgSrc:
      "https://theobroma.in/cdn/shop/files/ChocolateMousseCup_400x400.jpg?v=1711514769",
  },
  {
    id: 23,
    alt: "cake",
    name: "ASSORTED SORTED CUPCAKES BOX - 4 PCS",
    price: 480,
    imgSrc:
      "https://theobroma.in/cdn/shop/files/CupcakesAssortedBox-Square_400x400.jpg?v=1721368292",
  },
  {
    id: 24,
    alt: "cake",
    name: "RED VELVET CUPCAKE",
    price: 120,
    imgSrc:
      "https://theobroma.in/cdn/shop/files/RedVelvetCupcake_400x400.jpg?v=1711514845",
  },
  {
    id: 25,
    alt: "cake",
    name: "BLUEBERRY CHEESECAKE CUP",
    price: 195,
    imgSrc:
      "https://theobroma.in/cdn/shop/files/HIGHRESBlueberryCheesecakeCup02-Square_400x400.jpg?v=1711719903",
  },
  {
    id: 26,
    alt: "cake",
    name: "STRAWBERRY CUPCAKE",
    price: 125,
    imgSrc:
      "https://theobroma.in/cdn/shop/files/Strawberry_Cupcake_-_Square_400x400.jpg?v=1720539309",
  },
  {
    id: 27,
    alt: "cake",
    name: "CHOCOLATE & CARAMEL TART",
    price: 150,
    imgSrc:
      "https://theobroma.in/cdn/shop/files/CaramelChocolateTartCut-Square_400x400.jpg?v=1720539706",
  },
  {
    id: 28,
    name: "LEMON TART",
    alt: "cake",
    price: 160,
    imgSrc:
      "https://theobroma.in/cdn/shop/files/lemon-tart_400x400.jpg?v=1711109728",
  },
  {
    id: 29,
    name: "TIRAMISU CUP",
    alt: "cake",
    price: 175,
    imgSrc:
      "https://theobroma.in/cdn/shop/files/HIGHRESTiramisu-Square_400x400.jpg?v=1711185070",
  },
  {
    id: 30,
    name: "BANOFFEE HIGH",
    alt: "cake",
    price: 150,
    imgSrc:
      "https://theobroma.in/cdn/shop/files/BanoffeeHigh_400x400.jpg?v=1711514542",
  },
  {
    id: 31,
    name: "CHOCOLATE CUPCATE",
    alt: "cake",
    price: 120,
    imgSrc:
      "https://theobroma.in/cdn/shop/files/ChocolateCupcake_400x400.jpg?v=1711514719",
  },
  {
    id: 32,
    alt: "cake",
    name: "CHOCOLATE MOUSSE CUP",
    price: 155,
    imgSrc:
      "https://theobroma.in/cdn/shop/files/ChocolateMousseCup_400x400.jpg?v=1711514769",
  },
  {
    id: 33,
    alt: "cake",
    name: "ASSORTED SORTED CUPCAKES BOX - 4 PCS",
    price: 480,
    imgSrc:
      "https://theobroma.in/cdn/shop/files/CupcakesAssortedBox-Square_400x400.jpg?v=1721368292",
  },
  {
    id: 34,
    alt: "cake",
    name: "RED VELVET CUPCAKE",
    price: 120,
    imgSrc:
      "https://theobroma.in/cdn/shop/files/RedVelvetCupcake_400x400.jpg?v=1711514845",
  },
  {
    id: 35,
    alt: "cake",
    name: "BLUEBERRY CHEESECAKE CUP",
    price: 195,
    imgSrc:
      "https://theobroma.in/cdn/shop/files/HIGHRESBlueberryCheesecakeCup02-Square_400x400.jpg?v=1711719903",
  },
];

const Desserts = () => {
  const { addToCart, removeFromCart, showMessage, messageType, isInCart } =
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
          Desserts
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
            <div className="w-1/4 text-center mb-10 cursor-pointer text-browncol">
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
              <div className="mt-7">{item?.name}</div>
              <h4 className="text-amber-500 text-2xl my-2">र{item.price}</h4>
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

export default Desserts;
