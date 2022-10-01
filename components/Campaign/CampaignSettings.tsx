import React, { useState } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import Slider from "@mui/material/Slider";
import { useStore } from "../../store/store";
import SwitchButtonContainer from "./SwitchButton";

import calendarBlack from "../../public/svg/calendar-2.svg";
import locationSvg from "../../public/svg/location.svg";

import "react-datepicker/dist/react-datepicker.css";

interface CampaignNumberAndTitleProps {
  count: number;
  title: string;
}

const CampaignNumberAndTitle: React.FC<CampaignNumberAndTitleProps> = ({
  count,
  title,
}) => {
  return (
    <div className="flex items-center">
      <p className="w-6 h-6 bg-[#0F6EFF] text-center rounded-full text-white mr-[9px]">
        {count}
      </p>
      <p className="font-[500] text-[14px] leading-8 underline">{title}</p>
    </div>
  );
};

const LocationInput = () => {
  const { locationName, setLocationName }: any = useStore();

  return (
    <>
      <label
        htmlFor="locationName"
        className="text-[#606060] font-[500] text-[12px] leading-8"
      >
        Select Location
      </label>
      <div className="w-[744px] relative">
        <input
          value={locationName}
          type="text"
          id="locationName"
          className="block border-[1.5px] border-[#E9E9E9] focus:outline-none w-full h-[50px] px-4 rounded-[10px]"
          placeholder="Select a place name, address or coordinates"
          onChange={(e) => setLocationName(e.target.value)}
        />
        <div className="absolute top-1/2 -translate-y-1/2 right-4">
          <Image src={locationSvg} alt="location icon" />
        </div>
      </div>
    </>
  );
};

const LocationRadius = () => {
  const { locationRadius, setLocationRadius }: any = useStore();

  return (
    <div className="w-[744px]">
      <label
        htmlFor="location"
        className="text-[#606060] font-[500] text-[12px] leading-8"
      >
        Select target radius
      </label>
      <Slider
        value={locationRadius}
        min={1}
        max={30}
        step={1}
        aria-label="location"
        valueLabelDisplay="auto"
        marks={[
          { label: "1", value: 1 },
          { label: "30", value: 30 },
        ]}
        valueLabelFormat={(val) => `${val} Km`}
        onChange={(e: any) => setLocationRadius(e.target.value)}
      />
    </div>
  );
};

const CampaignSettings = () => {
  const {
    locationType,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    setCampaignBudget,
    campaignBudget,
  }: any = useStore();

  const formatter = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "INR",
  });

  return (
    <div className="mt-6">
      <div className="">
        <CampaignNumberAndTitle count={1} title="Budget and dates info" />

        <div className="pl-9 mb-6">
          <SwitchButtonContainer
            text="lifetime"
            title="Budget Timeline"
            firstButtonText="lifetime"
            secondButtonText="daily"
          />

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
                minDate={new Date()}
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
                onChange={(date) => setEndDate(date)}
                className="w-full h-[50px] border-[1.5px] border-[#E9E9E9] focus:outline-none z-20 rounded-[10px]"
              />
              <div className="absolute top-1/2 right-4">
                <Image src={calendarBlack} alt="calendar icon" />
              </div>
            </div>
          </div>

          <div className="mt-4 w-[744px]">
            <label
              htmlFor="budget"
              className="text-[#606060] font-[500] text-[12px] leading-8"
            >
              Enter campaign budget
            </label>
            <Slider
              value={campaignBudget}
              onChange={(e: any) => setCampaignBudget(e.target?.value)}
              aria-label="budget"
              valueLabelDisplay="auto"
              getAriaValueText={(val) => `Rs.${val}`}
              marks={[
                { value: 100, label: formatter.format(100) },
                { value: 100000, label: formatter.format(100000) },
              ]}
              min={100}
              max={100000}
              step={500}
              valueLabelFormat={(val) => `${formatter.format(val)}`}
            />
          </div>
        </div>

        <CampaignNumberAndTitle count={2} title="Location info" />

        <div className="pl-9 mb-6">
          <SwitchButtonContainer
            text="location"
            title="Location type"
            firstButtonText="location"
            secondButtonText="radius"
            type="location"
          />
          <div className="mt-4">
            {locationType === "location" && <LocationInput />}
            {locationType === "radius" && <LocationRadius />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignSettings;
