import React from "react";
import Image from "next/image";
import { IoAddCircleOutline } from "react-icons/io5";

import arrow from "../../public/svg/arrow.svg";

import search from "../../public/svg/search.svg";
import Table from "./Table";
import NewCampaign from "./NewCampaign";
import { useStore } from "../../store/store";
import { Campaign } from "../../pages";

interface SelectProps {
  title: string;
  options: string[];
  showTitle?: boolean;
}

interface IProps {
  data: Campaign[];
}

const Select: React.FC<SelectProps> = ({
  title,
  options,
  showTitle = true,
}) => {
  return (
    <div className="flex items-center relative">
      <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
        <Image src={arrow} alt="arrow icon" width={8} height={8} />
      </div>
      {showTitle && (
        <p className="text-black/50 text-[16px] leading-8 mr-1.5">{title}:</p>
      )}
      <select className="w-[138px] h-[50px] rounded-[10px] border-[1.5px] border-[#E9E9E9] focus:outline-none px-2 appearance-none relative">
        {title !== "days" && (
          <option
            className="text-[16px] leading-8"
            value={`all ${title.toLowerCase()}`}
          >
            All {title}
          </option>
        )}
        {options.map((item, index) => (
          <option value={item.toLowerCase()} key={index}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

const Campaign: React.FC<IProps> = ({ data }) => {
  const {
    showNewCampaign,
    setShowNewCampaign,
    allCampaigns,
    setAllCampaigns,
  }: any = useStore();

  setAllCampaigns(data);

  return (
    <div className="bg-[#F6F9FF] h-[calc(100vh-70px)] pl-[50px] pr-[53px] pt-10 overflow-scroll overflow-x-hidden">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-2xl">
            {showNewCampaign ? "Your Ad Campaign" : "Your Campaigns"}
          </h1>
          <p className="text-black/50 text-[16px] leading-8">
            {showNewCampaign
              ? "Launch your ad in just 4 easy steps"
              : "Check the list of campigns you created"}
          </p>
        </div>
        {!showNewCampaign && (
          <div className="w-[237px] h-[50px] flex items-center">
            <button
              type="button"
              className="flex bg-[#0F6EFF] rounded-[10px] w-full h-full items-center justify-center"
              onClick={() => setShowNewCampaign(true)}
            >
              <IoAddCircleOutline className="w-[21px] h-[21px] text-white mr-[9px]" />
              <p className="font-[500] text-[16px] leading-5 text-white">
                Create new campaign
              </p>
            </button>
          </div>
        )}
      </div>

      {!showNewCampaign && (
        <div className="bg-white px-8 py-7 rounded-[10px] mt-[22px]">
          <div className="flex justify-between">
            <div className="relative">
              <div className="w-6 h-6 absolute top-1/2 -translate-y-1/2 left-4">
                <Image src={search} alt="search icon" />
              </div>
              <input
                type="text"
                placeholder="Search for the campaign"
                className="text-black/50 text-[16px] leading-8 border-[1.5px] border-[#E9E9E9] rounded-[10px] py-2 focus:outline-none pl-[46px] pr-2 w-[315px] h-[50px]"
              />
            </div>

            <div className="flex items-center gap-4">
              <Select
                title="Platform"
                options={["Google", "Facebook", "Instagram"]}
              />
              <Select
                title="Status"
                options={["Live", "Paused", "Exhausted"]}
              />
              <Select
                title="days"
                options={["Last 30 days", "Last 15 days", "Last 7 days"]}
                showTitle={false}
              />
            </div>
          </div>

          <Table />
        </div>
      )}

      {showNewCampaign && <NewCampaign />}
    </div>
  );
};

export default Campaign;
