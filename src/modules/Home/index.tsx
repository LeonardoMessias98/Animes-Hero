import React from "react";
import AnimesSection from "./components/AnimesSection";

import CallContent from "./components/CallContent";
import TopTrendingAnimes from "./components/TopTrendingAnimes";
import { Content } from "./styles";

const Home = () => {
  return (
    <>
      <Content>
        <CallContent />
        <TopTrendingAnimes />
      </Content>

      <AnimesSection />
    </>
  );
};

export default Home;
