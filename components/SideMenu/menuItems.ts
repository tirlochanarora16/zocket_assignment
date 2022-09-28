import homeLogo from "../../public/svg/home.svg";
import basketLogo from "../../public/svg/basket.svg";
import customerLogo from "../../public/svg/customer.svg";
import campaignLogo from "../../public/svg/campaign.svg";

type MenuItem = {
  icon: any;
  title: string;
};

export const menuItems: MenuItem[] = [
  {
    icon: homeLogo,
    title: "Home",
  },
  {
    icon: campaignLogo,
    title: "Campaign",
  },
  {
    icon: basketLogo,
    title: "Products",
  },
  {
    icon: customerLogo,
    title: "Customers",
  },
];
