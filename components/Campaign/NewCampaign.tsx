import React, { useState } from "react";
import Image from "next/image";

import lamp from "../../public/svg/lamp.svg";
import basket from "../../public/svg/basket.svg";
import calendar from "../../public/svg/calendar.svg";
import ready from "../../public/svg/ready.svg";

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
    </div>
  );
};

export default NewCampaign;
