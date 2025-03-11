"use client";
import Image from "next/image";
import React from "react";

const HeroB = () => {
  return (
    <div className="hero-bg relative" >
      <div className=" flex justify-center items-center text-[16px] space-x-5 pt-10">
        <button className="bg-[#5552FF] p-2 px-7 rounded-full text-white">
          Get Started for free
        </button>
        <button className=" text-[#DADADA] p-2 px-7 rounded-full border-[#5A5A5A] border ">
          Book a Demo
        </button>
      </div>
      <div className="flex justify-center items-center mt-10">
        <Image alt="image" src={require("@/public/dashboard.png")} width={1000} height={1000} />
      </div>
    </div>
  );
};

export default HeroB;
