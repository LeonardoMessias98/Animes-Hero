import { IAnime, ICategory } from "shared/dto";

type GlobalType = {
  default: string;
  singleAnime: IAnime;
  animes: IAnime[];
  categories: ICategory[];
  trendingAnimes: IAnime[];
  relatedMangas: IAnime[];
  animesByCategory: IAnime[][];
};

export default GlobalType;
