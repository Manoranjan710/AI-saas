import React from "react";

const Companies = () => {
  const path = [
    "/cnn-logo.svg",
    "/forbes-logo.svg",
    "/inc-logo.svg",
    "/yahoo-logo.svg",
  ];
  return (
    <div className="bg-black">
      <div className="flex justify-center items-center  space-x-[8rem]">
        {path.map((item, index) => (
          <div key={index} className="flex justify-center items-center ">
            <img src={item} alt="company logo" className="h-28 h- w-28" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
