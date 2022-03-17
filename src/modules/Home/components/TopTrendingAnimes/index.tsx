import React, { useContext } from "react";
import Image from "next/image";

import GlobalContext from "shared/providers/context/GlobalContext";

import { Container } from "./styles";

const TopTrendingAnimes = () => {
  const { state } = useContext(GlobalContext);

  const trendingAnimes = state?.trendingAnimes;

  const topThreeTrending = trendingAnimes?.slice(0, 3);

  return (
    <Container>
      {topThreeTrending?.map((anime) => (
        <div className="card">
          <Image src={anime.attributes.posterImage.original} layout="fill" />
        </div>
      ))}
    </Container>
  );
};

export default TopTrendingAnimes;
