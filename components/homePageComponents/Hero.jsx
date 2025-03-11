"use client";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-black">
      <div className="mt-[7rem] flex justify-center items-center">
        <button className="text-white flex bg-[rgba(58,58,58,0.4)] rounded-full p-3 px-7 text-[12px]">
          Product Update v1.2
          <span className="ml-7">
            <Image
              alt="arrow"
              src={require("@/public/icons/right-arrow.svg")}
              width={9}
              height={5}
            />
          </span>
        </button>
      </div>

      <div className=" flex flex-col justify-center items-center mt-10">
          <h2 className="text-white text-[76px] leading-[1.1] m-0">Unlock Product Insights</h2>
          <h2 className="bg-gradient-to-r from-[#5653FF] to-[#D252FF] bg-clip-text text-transparent text-[76px] leading-[1.1] m-0">
            Make Better Decisions
          </h2>
        <p className="text-[20px] text-[#AAAAAA] mt-5">
          Analytics for Everyone and Transform Your Data into Actionalble
          Insights
        </p>
      </div>
    </div>
  );
};

export default Hero;
