import type { NextPage } from "next";
import { useContext } from "react";
import axios from "axios";

import HomeModule from "modules/Home";
import GlobalContext from "shared/providers/context/GlobalContext";
import { IAnimeProps } from "shared/dtos";
import { useEffect } from "react";

interface IHomePageProps {
  trendingAnimes: Array<IAnimeProps>;
}

const HomePage: NextPage<IHomePageProps> = ({ trendingAnimes }) => {
  const { state, setState } = useContext(GlobalContext);

  useEffect(() => {
    if (trendingAnimes && trendingAnimes.length > 0) {
      setState({ ...state, trendingAnimes });
    }
  }, [trendingAnimes]);

  return <HomeModule />;
};

export async function getStaticProps() {
  const getTrendingAnimes = async () => {
    const response = await axios.get(
      "https://kitsu.io/api/edge/trending/anime"
    );

    return response.data.data;
  };

  const trendingAnimes = await getTrendingAnimes();

  return {
    props: {
      trendingAnimes,
    },
    revalidate: 60 * 5,
  };
}

export default HomePage;
