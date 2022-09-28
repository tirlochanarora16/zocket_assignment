import React from "react";
import Image from "next/image";

import crown from "../../public/svg/crown.svg";
import gift from "../../public/svg/gift.svg";
import notification from "../../public/svg/notification.svg";
import arrow from "../../public/svg/arrow.svg";
import language from "../../public/svg/language.svg";

import user from "../../public/img/user.png";

const NavItem = ({ icon, name }: { icon: any; name: string }) => {
  return (
    <div className="flex items-center relative w-5 h-5 cursor-pointer">
      <Image src={icon} alt={`${name} icon`} layout="fill" />
      <div
        className={`bg-[#FF5050] rounded-full absolute top-0 ${
          name == "gift" ? "right-0" : "right-0.5"
        } w-[7px] h-[7px] border`}
      />
    </div>
  );
};

const TopNav = () => {
  return (
    <div className="bg-white border-b-2 border-[#DAE6FF] flex items-center justify-end !w-full py-4">
      <p className="text-[12px] leading-8 mr-[7px]">
        Free trial ends in 2 days
      </p>

      <div className="flex items-center justify-between bg-[#F29A2E1A] px-[7px] py-2.5 w-[88px] rounded-[5px] cursor-pointer mr-5 hover:opacity-80 transition-opacity duration-150">
        <div className="relative w-4 h-[15px]">
          <Image src={crown} alt="crown" layout="fill" />
        </div>
        <p className="font-medium text-[12px] leading-[15px] text-[#FF8C00]">
          Buy Plan
        </p>
      </div>

      <div className="flex items-center justify-between gap-4 mr-4">
        <NavItem icon={gift} name="gift" />
        <NavItem icon={notification} name="notification" />
      </div>

      <div className="w-9 h-9 relative mr-2">
        <Image src={user} alt="user" layout="fill" />
      </div>

      <div className="flex items-center mr-4 cursor-pointer">
        <p className="text-[#1B3F67] text-[14px] leading-[18px] mr-1.5">
          Mukund cake shop
        </p>
        <div className="flex items-center">
          <Image src={arrow} alt="arrow icon" />
        </div>
      </div>

      <div className="flex items-center w-5 h-5 relative mr-14 cursor-pointer">
        <Image src={language} alt="language" layout="fill" />
      </div>
    </div>
  );
};

export default TopNav;
