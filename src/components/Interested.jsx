import React from "react";
import { Link } from "react-router-dom";

const Interested = () => {
  return (
    <div>
      <div className="flex gap-[30px] justify-center my-[80px]">
        <div className="bg-black w-[70px] h-[3px] align-middle my-auto"></div>
        <h1 className="text-center text-[#d97706]" style={{ fontSize: "40px" }}>
          I AM INTERESTED IN
        </h1>
        <div className="bg-black w-[70px] h-[3px] align-middle my-auto"></div>
      </div>
      <div className="flex flex-wrap justify-center text-browncol">
        <div className="w-4/12 text-center mb-10 cursor-pointer">
          <Link to="/cakes">
            <div>
              <img
                className="block w-3/5 mx-auto mb-5 rounded-[20px]"
                src="https://breadworld.in/frontent/images/cakes.jpg"
              />
            </div>
            <div>CAKES</div>
          </Link>
        </div>
        <div className="w-4/12 text-center mb-10 cursor-pointer">
          <Link to="/desserts">
            <div>
              <img
                className="block w-3/5 mx-auto mb-5 rounded-[20px]"
                src="https://breadworld.in/frontent/images/fastfood.jpg"
              />
            </div>
            <div>DESSERTS</div>
          </Link>
        </div>
        <div className="w-4/12 text-center mb-10 cursor-pointer ">
          <Link to="/cakes">
            <div className="">
              <img
                className="block w-3/5 mx-auto mb-5 rounded-[20px]"
                src="https://breadworld.in/frontent/images/chocolates.jpg"
              />
            </div>
            <div>CHOCOLATES</div>
          </Link>
        </div>
        <div className="w-4/12 text-center mb-10 cursor-pointer">
          <Link to="/breads">
            <div className="">
              <img
                className="block w-3/5 mx-auto mb-5 rounded-[20px]"
                src="https://breadworld.in/frontent/images/bakes.jpg"
              />
            </div>
            <div>BREADS</div>
          </Link>
        </div>
        <div className="w-4/12 text-center mb-10 cursor-pointer">
          <Link to="/desserts">
            <div>
              <img
                className="block w-3/5 mx-auto mb-5 rounded-[20px]"
                src="https://breadworld.in/frontent/images/cakes.jpg"
              />
            </div>
            <div>DESSERTS</div>
          </Link>
        </div>
        <div className="w-4/12 text-center mb-10 cursor-pointer">
          <Link to="/breads">
            <div className="">
              <img
                className="block w-3/5 mx-auto mb-5 rounded-[20px]"
                src="https://breadworld.in/frontent/images/bakes.jpg"
              />
            </div>
            <div>BREADS</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Interested;
