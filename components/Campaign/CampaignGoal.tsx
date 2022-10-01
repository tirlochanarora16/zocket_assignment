import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { useStore } from "../../store/store";
import { step0data } from "./data";

const CampaignGoal = () => {
  const { goal, setGoal }: any = useStore();

  return (
    <div className="mt-6 grid grid-cols-3 gap-3 cursor-pointer">
      {step0data.map((item, index) => (
        <div
          key={index}
          className={`relative flex items-center border-[1.5px] border-[#F3F3F3] px-3 py-4 rounded-[10px] ${
            goal === index ? "bg-[#E7F0FF4D] border-[#0F6EFF]" : ""
          } `}
          onClick={() => setGoal(index)}
        >
          {goal === index && (
            <div className="absolute -top-1 -right-1 z-10 w-5 h-5">
              <BsCheckCircleFill className="text-[#0F6EFF] w-full h-full" />
            </div>
          )}
          <div className="w-[22px] h-[22px] flex items-center justify-center">
            {item.icon}
          </div>
          <div className="ml-[17px]">
            <p className="text-[#0B1A33] font-[500] text-[16px] leading-5">
              {item.title}
            </p>
            <p className="text-black/50 text-[13px] leading-4">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CampaignGoal;
