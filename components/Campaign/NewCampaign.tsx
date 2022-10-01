import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

import CampaignGoal from "./CampaignGoal";
import CampaignProduct from "./CampaignProduct";
import CampaignSettings from "./CampaignSettings";

import lamp from "../../public/svg/lamp.svg";
import basket from "../../public/svg/basket.svg";
import calendar from "../../public/svg/calendar.svg";
import ready from "../../public/svg/ready.svg";
import CampaignReady from "./CampaignReady";
import { useStore } from "../../store/store";

interface StepProps {
  currentStep: number;
  checkStep: number;
}

interface StepImg extends StepProps {
  title: string;
  icon: any;
}

const ProgressBar: React.FC<StepProps> = ({ currentStep, checkStep }) => {
  return (
    <div className="h-0.5 w-full bg-[#E7EAF0]">
      <div
        className={`h-full ${
          currentStep === checkStep ? "w-[70%]" : "w-full"
        } ${currentStep >= checkStep ? "bg-[#F29A2E]" : ""}`}
      />
    </div>
  );
};

const FormStep: React.FC<StepImg> = ({
  currentStep,
  checkStep,
  icon,
  title,
}) => {
  return (
    <>
      <div className="w-[62px] h-[62px] relative">
        <div
          className={`${
            currentStep >= checkStep ? "bg-[#F29A2E]" : ""
          } flex items-center border-[5.5px] border-[#FDFDFF] w-[62px] p-4 rounded-full h-full relative`}
        >
          <Image
            src={icon}
            alt="icon"
            className={`${currentStep >= checkStep ? "brightness-200" : ""}`}
          />
        </div>
        <p
          className={`text-center mt-[5px] text-[16px] leading-5 absolute w-[155px] -left-10 ${
            currentStep >= checkStep
              ? "font-[500] text-[#0B1A33]"
              : "font-normal text-[#ABB6C5]"
          }`}
        >
          {title}
        </p>
      </div>

      {checkStep !== 3 && (
        <ProgressBar currentStep={currentStep} checkStep={checkStep} />
      )}
    </>
  );
};

const NewCampaign = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { setProducts }: any = useStore();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("/api/allProducts");
      const { data } = response;

      setProducts(data);
    };

    fetchProducts();
  }, []);

  const titles = [
    "What you want to do",
    "Choose product",
    "Campaign settings",
    "Ready to go",
  ];

  return (
    <div className="mt-[45px]">
      <div className="flex items-center">
        <FormStep
          currentStep={currentStep}
          checkStep={0}
          icon={lamp}
          title="What you want to do"
        />
        <FormStep
          currentStep={currentStep}
          checkStep={1}
          icon={basket}
          title="Choose product"
        />
        <FormStep
          currentStep={currentStep}
          checkStep={2}
          icon={calendar}
          title="Campaign settings"
        />
        <FormStep
          currentStep={currentStep}
          checkStep={3}
          icon={ready}
          title="Ready to go"
        />
      </div>

      <div className="bg-white rounded-[10px] mt-16 p-8 mb-6">
        <div className="flex items-center border-b-[1.5px] border-b-[#EAEAEA] pb-[5px]">
          <h2 className="font-bold text-[16px] leading-5">
            {titles[currentStep]}
          </h2>
          <p className="text-[14px] leading-8 text-black/50 ml-2">
            Step ({currentStep + 1} of 4)
          </p>
        </div>

        {currentStep === 0 && <CampaignGoal />}
        {currentStep === 1 && <CampaignProduct />}
        {currentStep === 2 && <CampaignSettings />}
        {currentStep === 3 && <CampaignReady />}
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          className="w-[237px] h-[50px] bg-[#0F6EFF] flex items-center justify-center mb-5 rounded-[10px] text-white"
          onClick={() => setCurrentStep(currentStep + 1)}
        >
          {currentStep < 3 ? "Continue" : "Start Campaign"}
        </button>
      </div>
    </div>
  );
};

export default NewCampaign;
