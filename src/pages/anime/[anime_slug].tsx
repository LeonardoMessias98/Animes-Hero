import React, { useContext, useEffect } from "react";

import { IAnime } from "shared/dto";
import SingleAnimeModule from "modules/SingleAnime";
import GlobalContext from "shared/providers/context/GlobalContext";
import Head from "next/head";
import { api } from "shared/utils/api";

interface ISingleAnimePageProps {
  anime: IAnime;
  relatedMangas: IAnime[];
}

const SingleAnimePage = ({ anime, relatedMangas }: ISingleAnimePageProps) => {
  const { state, setState } = useContext(GlobalContext);

  useEffect(() => {
    if (anime) setState({ ...state, singleAnime: anime, relatedMangas });
  }, [anime]);

  return (
    <>
      <Head>
        <title>{anime.attributes.canonicalTitle} - Company Hero Animes</title>
        <meta name="description" content={anime.attributes.description} />

        <meta
          name="keywords"
          content={anime.attributes.canonicalTitle.split(" ").join(",")}
        />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`${anime.attributes.canonicalTitle} - Company Hero Animes`}
        />
        <meta
          property="og:description"
          content={anime.attributes.description.slice(0, 200)}
        />
        <meta
          property="og:url"
          content="https://company-hero-animes.vercel.app"
        />
        <meta
          property="og:site_name"
          content={`${anime.attributes.canonicalTitle} - Company Hero Animes`}
        />
        <meta
          property="og:image"
          content={anime.attributes.posterImage.medium}
        />
        <meta
          property="og:image"
          itemProp="image"
          content={
            anime.attributes.posterImage.tiny ||
            anime.attributes.posterImage.small
          }
        />
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

  const getRelatedMangas = async () => {
    try {
      const response = await api.get(`/anime/${anime.id}/categories`);

      const categories = response.data.data;


      const mangas = await api.get(`/categories/${categories[0].id}/manga`);

      return mangas.data.data;
    } catch (error) {}
  };

  const relatedMangas = await getRelatedMangas();

  return {
    props: {
      anime,
      relatedMangas,
    },
  };
};

export default SingleAnimePage;
