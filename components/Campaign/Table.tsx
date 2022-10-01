import React, { useState } from "react";
import Image from "next/image";
import Switch from "react-switch";
import axios from "axios";
import { useRouter } from "next/router";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Campaign } from "../../pages";
import { useStore } from "../../store/store";

interface JProps {
  isCampaignOn: boolean;
}

const SwitchButton: React.FC<JProps> = ({ isCampaignOn }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(isCampaignOn);

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
  const { allCampaigns }: any = useStore();

  const router = useRouter();

  const formatCurrency = new Intl.NumberFormat("en-us", {
    currency: "INR",
    style: "currency",
  });

  const deleteCampaign = async (id: string) => {
    await axios.post(`/api/deleteCampaign`, { id });
    router.reload();
  };

  return (
    <div className="w-full mt-[22px]">
      <table className="block w-full">
        <thead className="block w-full">
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
          {allCampaigns.length > 0 &&
            allCampaigns.map((campaign: Campaign, index: number) => {
              const startDate = campaign.dateRange.start;
              const endDate = campaign.dateRange.end;

              const status = startDate < endDate ? "Live" : "Exhausted";

              const monthNames = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ];
              const startDateStr = new Date(startDate);
              const endDateStr = new Date(endDate);

              const displayStartDate =
                startDateStr.getDate() +
                " " +
                monthNames[startDateStr.getMonth()] +
                " " +
                startDateStr.getFullYear();

              const displayEndDate =
                endDateStr.getDate() +
                " " +
                monthNames[endDateStr.getMonth()] +
                " " +
                endDateStr.getFullYear();

              const createdAtStr = new Date(campaign.createdAt);

              const displayCreatedAt =
                createdAtStr.getDate() +
                " " +
                monthNames[createdAtStr.getMonth()];

              return (
                <tr
                  className="py-2 w-full grid grid-cols-[repeat(2,1fr),235px,170px,repeat(6,1fr)] place-items-center border-b-2 border-[#EAEAEA]"
                  key={index}
                >
                  <td>
                    <input type="checkbox" id="row-1" />
                  </td>
                  <td>
                    <SwitchButton isCampaignOn={campaign.isCampaignOn} />
                  </td>
                  <td className="flex items-center w-full">
                    <div className="relative w-[58px] h-[54px] mr-[13px]">
                      <Image
                        src={campaign.campaign.imgUrl}
                        alt="item img"
                        layout="fill"
                      />
                    </div>
                    <div>
                      <p className="font-[500] text-[12px] leading-8">
                        {campaign.campaign.name}
                      </p>
                      <p className="text-[12px]">
                        Created on {displayCreatedAt}
                      </p>
                    </div>
                  </td>

                  <td className="text-[14px] leading-8">
                    {displayStartDate} - {displayEndDate}
                  </td>
                  <td className="text-center">300</td>
                  <td className="text-center truncate">
                    {formatCurrency.format(campaign.budget)}
                  </td>
                  <td className="text-center">{campaign.location}</td>
                  <td className="text-center">
                    {campaign.platform === "Facebook" && (
                      <FaFacebook className="text-[#1977F3] w-[22px] h-[22px]" />
                    )}
                    {campaign.platform === "Google" && (
                      <FcGoogle className="w-[22px] h-[22px]" />
                    )}
                    {campaign.platform === "Youtube" && (
                      <FaYoutube className="text-red-700 w-[22px] h-[22px]" />
                    )}
                    {campaign.platform === "Instagram" && (
                      <FaInstagram className="text-[#42229a] w-[22px] h-[22px]" />
                    )}
                  </td>
                  <td className="text-center">{status}</td>
                  <td className="flex items-center gap-4">
                    <BiEditAlt className="text-[#0F6EFF] w-[21px] h-[21px] cursor-pointer" />
                    <AiOutlineDelete
                      className="text-[#FC3F3F] w-[21px] h-[21px] cursor-pointer"
                      onClick={deleteCampaign.bind(null, campaign._id)}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
