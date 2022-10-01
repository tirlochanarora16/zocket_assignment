import type { NextPage } from "next";
import Head from "next/head";
import { SideMenu, TopNav, Campaign } from "../components";
import StoreProvider from "../store/store";

const Home: NextPage = () => {
  return (
    <StoreProvider>
      <section className="flex">
        <div className="w-[82px]">
          <SideMenu />
        </div>
        <div className="w-full">
          <TopNav />
          <Campaign />
        </div>
      </section>
    </StoreProvider>
  );
};

export default Home;
