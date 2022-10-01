import type { NextPage } from "next";
import axios from "axios";
import { SideMenu, TopNav, Campaign } from "../components";
import StoreProvider from "../store/store";

export type Campaign = {
  _id: string;
  isCampaignOn: boolean;
  campaign: {
    _id: string;
    imgUrl: string;
    name: string;
    price: number;
  };
  dateRange: {
    start: number;
    end: number;
  };
  budget: number;
  location: string;
  platform: string;
  status: string;
  createdAt: string;
};

interface IProps {
  data: Campaign[];
}

const Home: NextPage<IProps> = ({ data }) => {
  return (
    <StoreProvider>
      <section className="flex">
        <div className="w-[82px]">
          <SideMenu />
        </div>
        <div className="w-full">
          <TopNav />
          <Campaign data={data} />
        </div>
      </section>
    </StoreProvider>
  );
};

export async function getServerSideProps() {
  const response = await axios.get("http://localhost:8080/campaign/all");
  const { data } = response;

  return {
    props: {
      data: data.campaigns,
    },
  };
}

export default Home;
