import React from "react";
import Image from "next/image";

import { BsFillCheckCircleFill } from "react-icons/bs";

import p1 from "../../public/img/p1.png";
import p2 from "../../public/img/p2.png";
import p3 from "../../public/img/p3.png";
import p4 from "../../public/img/p4.png";
import user from "../../public/img/user-2.png";

import likeSvg from "../../public/svg/thumb.svg";
import { useStore } from "../../store/store";

interface Iprops {
  icon: any;
  i: number;
}

const CampaignItem: React.FC<Iprops> = ({ icon, i }) => {
  const { campaignReadyValue, setCampaignReadyValue }: any = useStore();

  const isSelected = i === campaignReadyValue;

  return (
    <div
      className={`w-[289px] h-fit border border-[#F5F5F5] p-5 rounded-[15px] cursor-pointer relative ${
        isSelected && "border-[#0066ff] h-[366px]"
      }`}
      onClick={() => setCampaignReadyValue(i)}
    >
      {isSelected && (
        <div className="absolute -top-1.5 right-0 z-10 bg-white">
          <BsFillCheckCircleFill className="text-[#0F6EFF]" />
        </div>
      )}
      <div className="flex items-center">
        <div className="mr-2">
          <Image src={user} alt="user img" objectFit="cover" />
        </div>
        <div>
          <p className="text-[#2B23A5] text-[16px] leading-[23px] font-bold">
            Mukund Cake Shop
          </p>
          <p className="text-[#767676] text-[10px] leading-5">Sponsored</p>
        </div>
      </div>

      <p className="text-[14px] leading-5 font-[500] my-2.5">
        We are the best bakery around you. Please like my page to get updates on
        exciting offers and discounts
      </p>

      <div className="w-[250px] h-[148px] relative">
        <div className="relative w-full h-full">
          <Image src={icon} alt="preview img 1" layout="fill" />
        </div>
        <div className="bg-[#F5F5F5] absolute w-full h-9 bottom-0 p-1.5 px-3 flex justify-around items-center">
          <p className="text-[#2B23A5] text-[11px] leading-[23px] font-[500]">
            Mukund Cake Shop
          </p>
          <div className="flex items-center justify-around border border-[#CED0D4] w-[58px]">
            <Image src={likeSvg} alt="like icon" />
            <p className="text-[#4B4F56] font-[500] text-[10px] leading-[22px]">
              Like
            </p>
          </div>
        </div>
      </div>

      {isSelected && (
        <div className="mt-4 flex justify-between">
          <button
            type="button"
            className="text-[#0F6EFF] bg-[#0F6EFF1A] px-4 rounded-[5px] font-[500] text-[12px] leading-8 w-[121px] block"
          >
            Change Image
          </button>
          <button
            type="button"
            className="text-[#0F6EFF] bg-[#0F6EFF1A] px-4 rounded-[5px] font-[500] text-[12px] leading-8 w-[121px] block"
          >
            Edit text
          </button>
        </div>
      )}
    </div>
  );
};

const CampaignReady = () => {
  return (
    <div className="mt-7">
      <div className="grid grid-cols-4 gap-4">
        <CampaignItem icon={p1} i={0} />
        <CampaignItem icon={p2} i={1} />
        <CampaignItem icon={p3} i={3} />
        <CampaignItem icon={p4} i={4} />
      </div>
    </div>
  );
};

export default CampaignReady;
