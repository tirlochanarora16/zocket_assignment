import Image from "next/image";
import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import Switch from "react-switch";

import itemImg from "../../public/img/item.png";

const SwitchButton = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  return (
    <Switch
      onChange={() => setIsSwitchOn(!isSwitchOn)}
      checked={isSwitchOn}
      height={20}
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

const Table = () => {
  return (
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

            <td className="text-[14px] leading-8">25 jul 2020 - 01 Aug 2020</td>
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
  );
};

export default Table;
