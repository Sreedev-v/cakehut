import React, { useContext } from "react";
import { TbCapsuleFilled } from "react-icons/tb";
import Interested from "../components/Interested";
import WeCare from "../components/WeCare";
import NewLaunches from "../components/NewLaunches";
import { Ctx } from "../context";

const Home = () => {
  const ctx = useContext(Ctx);

  return (
    <div>
      <div className="bg-browncol m-10 p-10 rounded-[13vh] grid grid-flow-col py-16">
        <div className="bg-transparent flex flex-col place-content-center text-[25px] col-span-1">
          <TbCapsuleFilled className="bg-inherit text-amber-600 " />
          <TbCapsuleFilled className="bg-inherit text-white " />
          <TbCapsuleFilled className="bg-inherit text-white " />
        </div>
        <div className="bg-transparent col-span-3">
          <img
            src="https://media.istockphoto.com/id/1772456565/photo/welcoming-female-baker-holding-freshly-baked-almond-croissants-in-background-of-bakery-shop.webp?b=1&s=612x612&w=0&k=20&c=L5MiWfZJX99Orn278eSLGaCVgt6rDTNAVMGPBTELk2k="
            alt=""
            className="rounded-[120px] "
          />
        </div>
        <div className="bg-transparent text-white grid grid-flow-row py-5 col-span-2">
          <p className="bg-transparent text-[45px] w-80">
            MADE BY HAND,FROM SCRATCH,WITH LOVE
          </p>
          <div className="bg-transparent w-70">
            <p className="bg-transparent helveticafont text-[15px]">
              Their experience pays a role in the way they work. Bakers use
              flavours.
            </p>
          </div>
          <button
            className="bg-yellow-500 w-40 rounded-[100px] place-items-center hover:bg-yellow-400 active:bg-amber-900
          "
          >
            ORDER NOW
          </button>
        </div>
      </div>
      {/* <Slider /> */}
      <Interested />
      <WeCare />
      <NewLaunches />
    </div>
  );
};

export default Home;
