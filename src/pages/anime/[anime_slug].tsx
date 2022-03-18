import React, { useContext, useEffect } from "react";

import { IAnime } from "shared/dto";
import SingleAnimeModule from "modules/SingleAnime";
import GlobalContext from "shared/providers/context/GlobalContext";
import Head from "next/head";
import { api } from "shared/utils/api";

interface ISingleAnimePageProps {
  anime: IAnime;
  relatedAnimes: IAnime[];
}

const SingleAnimePage = ({ anime, relatedAnimes }: ISingleAnimePageProps) => {
  const { state, setState } = useContext(GlobalContext);

  useEffect(() => {
    if (anime) setState({ ...state, singleAnime: anime, relatedAnimes });
  }, [anime]);

  return (
    <>
      <Head>
        <title>{anime.attributes.canonicalTitle} - Company Hero Animes</title>
      </Head>
      <SingleAnimeModule />
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const getAnime = async () => {
    try {
      const response = await api.get(`/anime/${context.query.anime_slug}`);

      return response.data.data;
    } catch (error) {}
  };

  const anime = await getAnime();

  const getRelatedAnimes = async () => {
    try {
      const response = await api.get(`/anime/${anime.id}/categories`);

      const categories = response.data.data;

      const animes = await api.get(`/categories/${categories[0].id}/anime`);

      return animes.data.data;
    } catch (error) {}
  };

  const relatedAnimes = await getRelatedAnimes();

  return {
    props: {
      anime,
      relatedAnimes,
    },
  };
};

export default SingleAnimePage;
