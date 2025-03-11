import React from "react";

const FundDetails = () => {
  return (
    <div className="bg-black  ">
      <div className="grid grid-cols-4 w-[90%] mx-auto gap-x-7 pb-7">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-white text-[36px] leading-[1] m-0">We are growing <br /> like crazy</h2>
          <p className=" text-[16px] text-[#AAAAAA] leading-[1] m-0 mt-3">
            Lorem ipsum dolor, consectetur elit. <br /> Praesent porta metus.
          </p>
        </div>
        <div>
          <h2 className="text-white text-[52px]">$28M</h2>
          <p className="text-white text-[26px] ">raised by Startups</p>
        </div>
        <div>
          <h2 className="text-white text-[52px]">$28M</h2>
          <p className="text-white text-[26px] ">raised by Startups</p>
        </div>
        <div>
          <h2 className="text-white text-[52px]">$28M</h2>
          <p className="text-white text-[26px] ">raised by Startups</p>
        </div>
      </div>
    </div>
  );
};

export default FundDetails;
