import React, { useState } from "react";
import Image from "next/image";

import logo from "../../public/svg/logo.svg";
import { menuItems } from "./menuItems";
import MenuItem from "./MenuItem";

const SideMenu = () => {
  const [activeItem, setActiveItem] = useState("Campaign");

  return (
    <div className="w-[82px] bg-[#001738] h-screen fixed">
      <div className="w-[46px] h-[46px] mx-auto relative mt-[51px] p-[0.23px]">
        <Image src={logo} alt="zocket logo" layout="fill" />
      </div>
      <div className="mt-[60px] flex flex-col justify-between h-[257px]">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            icon={item.icon}
            title={item.title}
            active={activeItem === item.title}
            setActiveItem={setActiveItem}
          />
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
