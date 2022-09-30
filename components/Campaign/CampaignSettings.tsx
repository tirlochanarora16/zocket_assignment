import React, { useState } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";

import calendarBlack from "../../public/svg/calendar-2.svg";

import "react-datepicker/dist/react-datepicker.css";

interface TimelineButtonProps {
  text: string;
  selectedTimeline: string;
  changeTimeline: React.Dispatch<React.SetStateAction<string>>;
}

const TimeLineButton: React.FC<TimelineButtonProps> = ({
  text,
  selectedTimeline,
  changeTimeline,
}) => {
  return (
    <p
      className={`flex-1 flex items-center justify-center z-10 cursor-pointe capitalize cursor-pointer ${
        selectedTimeline === text ? "text-white" : "text-[#999999]"
      }`}
      onClick={() => changeTimeline(text)}
    >
      {text}
    </p>
  );
};

const CampaignSettings = () => {
  const [budgetTimeline, setBudgetTimeline] = useState("lifetime");
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  console.log(startDate);

  return (
    <div className="mt-6">
      <div className="">
        <div className="flex items-center">
          <p className="w-6 h-6 bg-[#0F6EFF] text-center rounded-full text-white mr-[9px]">
            1
          </p>
          <p className="font-[500] text-[14px] leading-8 underline">
            Budget and dates info
          </p>
        </div>

        <div className="pl-9">
          <p className="text-[#606060] font-[500] text-[12px] leading-8">
            Budget Timeline
          </p>
          <div className="flex w-[229px] h-[39px] relative bg-[#F0F0F0] rounded-[48px]">
            <TimeLineButton
              text="lifetime"
              selectedTimeline={budgetTimeline}
              changeTimeline={setBudgetTimeline}
            />
            <TimeLineButton
              text="daily"
              selectedTimeline={budgetTimeline}
              changeTimeline={setBudgetTimeline}
            />

            <div
              className={`absolute h-full w-1/2 bg-[#0F6EFF] rounded-full ${
                budgetTimeline === "lifetime" ? "left-0" : "right-0"
              }`}
            />
          </div>

          <div className="mt-4 flex gap-4">
            <div className="relative w-[363px]">
              <label
                htmlFor="startDate"
                className="text-[#606060] font-[500] text-[12px] leading-8"
              >
                Start Date
              </label>
              <DatePicker
                selected={startDate}
                id="startDate"
                startDate={startDate}
                onChange={(date) => setStartDate(date)}
                minDate={startDate}
                className="w-full h-[50px] border-[1.5px] border-[#E9E9E9] focus:outline-none z-20 rounded-[10px]"
              />
              <div className="absolute top-1/2 right-4">
                <Image src={calendarBlack} alt="calendar icon" />
              </div>
            </div>
            <div className="relative w-[363px]">
              <label
                htmlFor="endDate"
                className="text-[#606060] font-[500] text-[12px] leading-8"
              >
                End Date
              </label>
              <DatePicker
                selected={endDate}
                id="endDate"
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                onChange={(date) => setStartDate(date)}
                className="w-full h-[50px] border-[1.5px] border-[#E9E9E9] focus:outline-none z-20 rounded-[10px]"
              />
              <div className="absolute top-1/2 right-4">
                <Image src={calendarBlack} alt="calendar icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignSettings;
