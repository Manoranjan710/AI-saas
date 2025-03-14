import React from "react";

const ScaleUp = () => {
  return (
    <div className="bg-black/70 py-[5rem]">
      <div className="w-[90%] mx-auto flex flex-col justify-center items-center">
        <h2 className=" text-3xl md:text-[64px] text-[#DDDDDD] leading-[0.8] text-center">
          Scale up your SaaS, <br />
          <span className=" text-3xl md:text-[64px] text-[#DDDDDD] leading-[1]">
            E-commerce and more with
          </span>
        </h2>
        <h2 className="md:text-[64px] text-3xl font-normal leading-tight m-0 bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
          AI powered Analytics
        </h2>
      </div>

      <div className=" flex justify-center items-center mt-7">
        <button className="bg-[#5552FF] text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
          Lets's Start
        </button>
      </div>
    </div>
  );
};

export default ScaleUp;
