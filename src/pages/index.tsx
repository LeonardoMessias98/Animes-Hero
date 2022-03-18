import type { NextPage } from "next";
import { useContext, useEffect } from "react";

import HomeModule from "modules/Home";
import { IAnime, ICategory } from "shared/dto";
import GlobalContext from "shared/providers/context/GlobalContext";
import { api } from "shared/utils/api";

interface IHomePageProps {
  trendingAnimes: Array<IAnime>;
  animesByCategory: IAnime[][];
  categories: ICategory[];
  animes: Array<IAnime>;
}

const HomePage: NextPage<IHomePageProps> = ({
  animesByCategory,
  trendingAnimes,
  categories,
  animes,
}) => {
  const { state, setState } = useContext(GlobalContext);

  useEffect(() => {
    if (trendingAnimes && trendingAnimes.length > 0) {
      setState({
        ...state,
        trendingAnimes,
        categories,
        animesByCategory,
        animes,
      });
    }
  }, [trendingAnimes]);

  return <HomeModule />;
};

export async function getStaticProps() {
  const getAnimes = async () => {
    const response = await api.get(
      "/anime?page%5Blimit%5D=20&page%5Boffset%5D=0"
    );

    return response.data.data;
  };

  const getTrendingAnimes = async () => {
    const response = await api.get("/trending/anime");

    return response.data.data;
  };

  const getAnimesAndCategories = async () => {
    try {
      const response = await api.get(
        "/categories?page%5Blimit%5D=15&page%5Boffset%5D=0"
      );

      const categories = response.data.data;

      const animes = [];

      for (const category of categories) {
        const response = await api.get(
          `/categories/${category.id}/anime?page%5Blimit%5D=20&page%5Boffset%5D=0`
        );

        animes.push(response.data.data);
      }

      return { animes, categories };
    } catch (error) {}
    return { animes: [], categories: [] };
  };

  const animes = await getAnimes();
  const trendingAnimes = await getTrendingAnimes();
  const animesAndCategories = await getAnimesAndCategories();

  return {
    props: {
      animes,
      trendingAnimes,
      categories: animesAndCategories.categories,
      animesByCategory: animesAndCategories.animes,
    },
    revalidate: 60 * 5,
  };
}

export default HomePage;
