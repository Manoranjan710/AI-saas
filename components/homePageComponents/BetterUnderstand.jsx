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
      <div className="w-[90%] mx-auto flex flex-col justify-center items-center">
        <h2 className="text-[48px] text-[#DDDDDD] leading-[1]">
          Better Understand your SaaS, <br />{" "}
          <span className="flex justify-center items-center">
            E-commerce and more
          </span>
        </h2>
        <p className="text-[18px] text-[#AAAAAA] w-[40%] text-center">
          Seamlessly gather data from multiple sources including CRM systems,
          user feedback, website analytics, and more.
        </p>
      </div>

      <div className="w-[80%] mx-auto py-18">
        <div className="grid grid-cols-5 gap-x-[10rem] gap-y-[3rem]">
          {data.map((item) => (
            <div>
              <div className="p-5 w-[100px] h-[100px] border-2 rounded-[12px] bg-[#272727]/20 border-[#272727]"></div>
              <h2 className="text-[14px] text-[#AAAAAA] text-center">{item}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BetterUnderstand;
