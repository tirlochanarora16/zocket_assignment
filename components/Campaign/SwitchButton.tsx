import React, { useState, useEffect } from "react";
import { useStore } from "../../store/store";

interface Iprops {
  text: string;
  selectedValue: string;
  changeValue: React.Dispatch<React.SetStateAction<string>>;
}

interface JProps {
  text: string;
  title: string;
  firstButtonText: string;
  secondButtonText: string;
  type?: string;
}

const SwitchButton: React.FC<Iprops> = ({
  text,
  selectedValue,
  changeValue,
}) => {
  return (
    <p
      className={`flex-1 flex items-center justify-center z-10 cursor-pointe capitalize cursor-pointer ${
        selectedValue === text ? "text-white" : "text-[#999999]"
      }`}
      onClick={() => changeValue(text)}
    >
      {text}
    </p>
  );
};

const SwitchButtonContainer: React.FC<JProps> = ({
  text,
  title,
  firstButtonText,
  secondButtonText,
  type,
}) => {
  const [selectedValue, setSelectedValue] = useState(text);

  const { setLocationType }: any = useStore();

  useEffect(() => {
    if (type === "location") {
      setLocationType(selectedValue);
    }
  }, [selectedValue]);

  return (
    <>
      <p className="text-[#606060] font-[500] text-[12px] leading-8">{title}</p>
      <div className="flex w-[229px] h-[39px] relative bg-[#F0F0F0] rounded-[48px]">
        <SwitchButton
          text={firstButtonText}
          selectedValue={selectedValue}
          changeValue={setSelectedValue}
        />
        <SwitchButton
          text={secondButtonText}
          selectedValue={selectedValue}
          changeValue={setSelectedValue}
        />

        <div
          className={`absolute h-full w-1/2 bg-[#0F6EFF] rounded-full ${
            selectedValue === text ? "left-0" : "right-0"
          }`}
        />
      </div>
    </>
  );
};

export default SwitchButtonContainer;
