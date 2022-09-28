import type { NextPage } from "next";
import Head from "next/head";
import { SideMenu, TopNav, Campaign } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <section className="flex">
        <div className="w-[82px]">
          <SideMenu />
        </div>
        <div>
          <TopNav />
          <Campaign />
        </div>
      </section>
    </>
  );
};

export default Home;
