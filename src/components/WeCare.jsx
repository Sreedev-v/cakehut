import React from "react";
import cake1 from "../images/cake1.png";
import wecare from "../images/wecare.png";

const WeCare = () => {
  return (
    <div className="my-20 flex justify-between p-5">
      <div>
        <img src={cake1} />
      </div>
      <div className="text-center w-2/4">
        <img className="m-auto" src={wecare} />
        <h3 className="text-black font-poppins  text-[30px]">The Bread World Difference</h3>
        <p className="text-[#333] text-[21px] font-poppins font-normal my-[20px]">Healthy</p>
        <p className="text-[#666666] text-[18px] font-poppins font-light">High quality, natural ingredients</p>
        <p className="text-[#666666] text-[18px] font-poppins font-light">
          with no preservatives and artificial colours.
        </p>
        <p className="text-[#333] text-[21px] font-poppins font-normal my-[20px]">Hygienic</p>
        <p className="text-[#666666] text-[18px] font-poppins font-light">
          Our products are produced in a centrally air-conditioned
        </p>
        <p className="text-[#666666] text-[18px] font-poppins font-light">
          production center conforming to ISO/HACCP norms.
        </p>
        <p className="text-[#666666] text-[18px] font-poppins font-light">
          Your health is our focus. We are constantly evolving
        </p>
        <p className="text-[#666666] text-[18px] font-poppins font-light">our recipes to better meet your needs and</p>
        <p className="text-[#666666] text-[18px] font-poppins font-light">the needs of your loved ones!</p>
      </div>
    </div>
  );
};

export default WeCare;
