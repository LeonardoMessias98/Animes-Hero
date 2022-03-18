import React, { useContext, useEffect } from "react";
import axios from "axios";

import { IAnime } from "shared/dto";
import SingleAnimeModule from "modules/SingleAnime";
import GlobalContext from "shared/providers/context/GlobalContext";

interface ISingleAnimePageProps {
  anime: IAnime;
}

const SingleAnimePage = ({ anime }: ISingleAnimePageProps) => {
  const { state, setState } = useContext(GlobalContext);

  useEffect(() => {
    if (anime) setState({ ...state, singleAnime: anime });
  }, [anime]);

  return <SingleAnimeModule />;
};

export const getServerSideProps = async (context: any) => {
  const getAnime = async () => {
    try {
      const response = await axios.get(
        `https://kitsu.io/api/edge/anime/${context.query.anime_slug}`
      );

      return response.data.data;
    } catch (error) {}
  };

  const anime = await getAnime();

  return {
    props: {
      anime,
    },
  };
};

export default SingleAnimePage;
