import React, { useState } from "react";
import Image from "next/image";
import { IoAddCircleOutline } from "react-icons/io5";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import Switch from "react-switch";

import arrow from "../../public/svg/arrow.svg";

import search from "../../public/svg/search.svg";

import itemImg from "../../public/img/item.png";

interface SelectProps {
  title: string;
  options: string[];
  showTitle?: boolean;
}

const SwitchButton = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  return (
    <Switch
      onChange={() => setIsSwitchOn(!isSwitchOn)}
      checked={isSwitchOn}
      height={20}
      handleDiameter={100}
      checkedIcon={false}
      uncheckedIcon={false}
      checkedHandleIcon={
        <div className="flex items-center justify-center w-full h-full">
          <AiOutlinePlus className="text-[#0F6EFF]" />
        </div>
      }
      uncheckedHandleIcon={
        <div className="flex items-center justify-center w-full h-full">
          <AiOutlineMinus className="text-[#DADEE3]" />
        </div>
      }
      onColor="#0F6EFF"
      offColor="#DADEE3"
    />
  );
};

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

const Campaign = () => {
  return (
    <div className="bg-[#F6F9FF] h-[calc(100vh-70px)] pl-[50px] pr-[53px] pt-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-2xl">Your Campaigns</h1>
          <p className="text-black/50 text-[16px] leading-8">
            Check the list of campigns you created
          </p>
        </div>
        <div className="w-[237px] h-[50px] flex items-center">
          <button
            type="button"
            className="flex bg-[#0F6EFF] rounded-[10px] w-full h-full items-center justify-center"
          >
            <IoAddCircleOutline className="w-[21px] h-[21px] text-white mr-[9px]" />
            <p className="font-[500] text-[16px] leading-5 text-white">
              Create new campaign
            </p>
          </button>
        </div>
      </div>

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
            <Select title="Status" options={["Live", "Paused", "Exhausted"]} />
            <Select
              title="days"
              options={["Last 30 days", "Last 15 days", "Last 7 days"]}
              showTitle={false}
            />
          </div>
        </div>

        <div className="w-full mt-[22px]">
          <table className="block w-full">
            <thead className="block w-full">
              {/* <tr className="flex items-center bg-[#EAEAEA] w-full justify-between  py-2 px-[25px] rounded-[10px] [&>*]:text-black/50"> */}
              <tr className="rounded-[10px] [&>*]:text-black/50 bg-[#EAEAEA] py-2 grid grid-cols-[repeat(2,1fr),235px,170px,repeat(6,1fr)]">
                <th>
                  <input type="checkbox" id="selectAll" />
                </th>
                <th>On/Off</th>
                <th>Campaign</th>
                <th>Date Range</th>
                <th>Clicks</th>
                <th>Budget</th>
                <th>Location</th>
                <th>Platform</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="block w-full">
              <tr className="py-2 w-full grid grid-cols-[repeat(2,1fr),235px,170px,repeat(6,1fr)] place-items-center">
                <td>
                  <input type="checkbox" id="row-1" />
                </td>
                <td>
                  <SwitchButton />
                </td>
                <td className="flex items-center">
                  <div className="relative w-[58px] h-[54px] mr-[13px]">
                    <Image src={itemImg} alt="item img" layout="fill" />
                  </div>
                  <div>
                    <p className="font-[500] text-[14px] leading-8">
                      Bluberry cake Campaign
                    </p>
                    <p className="text-[12px]">Created on 14 july</p>
                  </div>
                </td>

                <td className="text-[14px] leading-8">
                  25 jul 2020 - 01 Aug 2020
                </td>
                <td className="text-center">300</td>
                <td className="text-center">INR 3,400</td>
                <td className="text-center">Chennai</td>
                <td className="text-center">
                  <FaFacebook className="text-[#1977F3] w-[22px] h-[22px]" />
                </td>
                <td className="text-center">Live now</td>
                <td className="flex items-center gap-4">
                  <BiEditAlt className="text-[#0F6EFF] w-[21px] h-[21px] cursor-pointer" />
                  <AiOutlineDelete className="text-[#FC3F3F] w-[21px] h-[21px] cursor-pointer" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
