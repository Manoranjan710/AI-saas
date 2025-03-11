"use client";
import Image from "next/image";
import React from "react";

const Details = () => {
  return (
    <div className="bg-black pb-7">
      <div className="flex justify-center items-center">
        <div className=" flex flex-col justify-center items-center mt-10">
          <h2 className="text-white text-[46px] leading-[1.1] m-0">
            Better Understand your
          </h2>
          <h2 className="bg-gradient-to-r from-[#5653FF] to-[#D252FF] bg-clip-text text-transparent text-[46px] leading-[1.1] m-0">
            SaaS, E-commerce and more
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-10 mt-[7rem] w-[90%] mx-auto">
        <div
          className="relative rounded-lg"
          style={{
            background:
              "radial-gradient(circle, rgba(88, 28, 135, 0.7) 0%, rgba(0, 0, 0, 1) 70%)",
              border: "1px solid rgba(88, 28, 135, 0.1)",
              boxShadow: "0 0 30px 5px rgba(88, 28, 135, 0.25)",
          }}
        >
          
            <Image
              alt=""
              src={require("@/public/grid-img-1.png")}
              width={500}
              height={500}
            />
            <Image
              alt=""
              src={require("@/public/grid-img-2.png")}
              className="absolute top-0 left-[50%] "
            />
          
        </div>
        <div>
          <h2 className="text-[32px] text-white">
            Comprehensive Data Collection
          </h2>
          <p className="text-[16px] text-[#AAAAAA]">
            Seamlessly gather data from multiple sources including CRM systems,
            user feedback, website analytics, and more. Our platform integrates
            effortlessly with your existing tools to provide a holistic view of
            your business.
          </p>
          <div className="mt-3 flex ">
            <button className="text-white flex bg-[rgba(58,58,58,0.4)] rounded-lg p-2 px-7 text-[16px]">
              Learn More
              <span className="ml-7 flex justify-center items-center">
                <Image
                  alt="arrow"
                  src={require("@/public/icons/Arrow-1.svg")}
                  width={14}
                  height={9}
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
