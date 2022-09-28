import React from "react";
import Image from "next/image";

interface ItemProps {
  icon: any;
  title: string;
  active: boolean;
  setActiveItem: React.Dispatch<React.SetStateAction<string>>;
}

const MenuItem: React.FC<ItemProps> = ({
  icon,
  title,
  active,
  setActiveItem,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center h-[58px] cursor-pointer hover:bg-[#1977F31A] relative  ${
        active ? "bg-[#1977F31A]" : ""
      }`}
      onClick={() => setActiveItem(title)}
    >
      {active && (
        <div className="absolute top-0 left-0 bottom-0 h-full w-[5px] bg-[#1977F3] rounded-r-[2px]" />
      )}
      <div className="w-[21px] h-[21px] relative flex items-center justify-center">
        <Image src={icon} alt={`${title} icon`} layout="fill" />
      </div>
      <p className="text-white text-[10px] flex items-center justify-center">
        {title}
      </p>
    </div>
  );
};

export default MenuItem;
