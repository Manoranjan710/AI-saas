"use client";
import Image from "next/image";
import React from "react";

const HeroB = () => {
  return (
    <div className="hero-bg relative px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-center items-center text-[14px] sm:text-[16px] space-y-3 sm:space-y-0 sm:space-x-5 pt-10">
        <button className="bg-[#5552FF] p-2 px-5 sm:px-7 rounded-full text-white w-full sm:w-auto">
          Get Started for free
        </button>
        <button className="text-[#DADADA] p-2 px-5 sm:px-7 rounded-full border-[#5A5A5A] border w-full sm:w-auto">
          Book a Demo
        </button>
      </div>
      <div className="flex justify-center items-center mt-6 sm:mt-10">
        <Image 
          alt="image" 
          src={require("@/public/dashboard.png")} 
          width={1000} 
          height={1000} 
          className="w-full max-w-[90%] sm:max-w-none"
        />
      </div>
    </div>
  );
};

export default HeroB;