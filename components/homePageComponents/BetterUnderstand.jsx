import React from "react";

const BetterUnderstand = () => {
  const data = [
    "Lorem ipsum dolor, consectetur elit",
    "Lorem ipsum dolor, consectetur elit",
    "Lorem ipsum dolor, consectetur elit",
    "Lorem ipsum dolor, consectetur elit",
    "Lorem ipsum dolor, consectetur elit",
    "Lorem ipsum dolor, consectetur elit",
    "Lorem ipsum dolor, consectetur elit",
    "Lorem ipsum dolor, consectetur elit",
    "Lorem ipsum dolor, consectetur elit",
    "Lorem ipsum dolor, consectetur elit",
  ];

  return (
    <div className="bg-black py-[5rem]">
      <div className="w-[90%] mx-auto flex flex-col justify-center items-center text-center">
        <h2 className="text-[#DDDDDD] text-[clamp(32px,5vw,48px)] leading-[1.2]">
          Better Understand your SaaS, <br />
          <span className="flex justify-center items-center">E-commerce and more</span>
        </h2>
        <p className="text-[#AAAAAA] text-lg sm:text-xl max-w-[90%] md:max-w-[40%]">
          Seamlessly gather data from multiple sources including CRM systems,
          user feedback, website analytics, and more.
        </p>
      </div>

      <div className="w-[90%] mx-auto py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-[2rem] sm:gap-x-[5rem] lg:gap-x-[10rem] gap-y-[2rem]">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="p-5 w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] border-2 rounded-[12px] bg-[#272727]/20 border-[#272727]"></div>
              <h2 className="text-[12px] sm:text-[14px] text-[#AAAAAA] text-center mt-2">{item}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BetterUnderstand;
