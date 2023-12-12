import { IAnime, ICategory } from "shared/dto";
import { GlobalContextProps } from ".";

const InitialState: GlobalContextProps = {
  state: {
    default: "",
    singleAnime: {} as IAnime,
    animes: [{} as IAnime],
    categories: [{} as ICategory],
    trendingAnimes: [{} as IAnime],
    relatedMangas: [{} as IAnime],
    animesByCategory: [[{} as IAnime]],
  },
  setState: () => {},
};

export default InitialState;
