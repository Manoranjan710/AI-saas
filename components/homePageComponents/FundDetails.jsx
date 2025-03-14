import React from "react";

const FundDetails = () => {
  return (
    <div className="bg-black py-10">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 text-center lg:text-left">
        <div className="flex flex-col justify-center items-center lg:items-start">
          <h2 className="text-white text-[32px] md:text-[36px] leading-[1] m-0">
            We are growing <br /> like crazy
          </h2>
          <p className="text-[16px] text-[#AAAAAA] leading-[1] m-0 mt-3">
            Lorem ipsum dolor, consectetur elit. <br /> Praesent porta metus.
          </p>
        </div>
        <div>
          <h2 className="text-white text-[42px] md:text-[52px]">$28M</h2>
          <p className="text-white text-[22px] md:text-[26px]">raised by Startups</p>
        </div>
        <div>
          <h2 className="text-white text-[42px] md:text-[52px]">$28M</h2>
          <p className="text-white text-[22px] md:text-[26px]">raised by Startups</p>
        </div>
        <div>
          <h2 className="text-white text-[42px] md:text-[52px]">$28M</h2>
          <p className="text-white text-[22px] md:text-[26px]">raised by Startups</p>
        </div>
      </div>
    </div>
  );
};

export default FundDetails;