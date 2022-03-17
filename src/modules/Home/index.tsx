import React from "react";

import CallContent from "./components/CallContent";
import TopTrendingAnimes from "./components/TopTrendingAnimes";
import { Content } from "./styles";

const Home = () => {
  return (
    <Content>
      <CallContent />
      <TopTrendingAnimes />
    </Content>
  );
};

export default Home;
