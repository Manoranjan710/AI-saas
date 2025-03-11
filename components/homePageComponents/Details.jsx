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

      <div className="grid grid-cols-[10fr_10fr] w-[90%] mx-auto">
        <Image
          alt=""
          src={require("@/public/grid-img-3.png")}
          className="w-fit h-[400px]"
        />
        {/* <Image
              alt=""
              src={require("@/public/grid-img-2.png")}
              className="absolute top-0 left-[50%] "
            /> */}
        <div className="flex flex-col justify-center ">
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

        <div className="flex flex-col justify-center ">
          <h2 className="text-[32px] text-white">
            Advanced Data Visualization
          </h2>
          <p className="text-[16px] text-[#AAAAAA]">
            Easily interpret your data with our intuitive visualization tools.
            From interactive dashboards to detailed reports, our visualizations
            help you quickly identify trends, patterns, and opportunities.
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
        <div>
          <Image
            alt=""
            src={require("@/public/grid-img-4.png")}
            className="w-fit h-[400px]"
          />
        </div>

        <Image
          alt=""
          src={require("@/public/grid-img-5.png")}
          className="w-fit h-[400px]"
        />
        <div className="flex flex-col justify-center ">
          <h2 className="text-[32px] text-white">Behavioural Analysis</h2>
          <p className="text-[16px] text-[#AAAAAA]">
            Dive deep into user behavior to understand how customers interact
            with your product. Identify key touchpoints, track usage patterns,
            and uncover areas for improvement to enhance the user experience.
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
