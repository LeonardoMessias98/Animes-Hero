import { IAnimeProps } from "shared/dtos";
import { GlobalContextProps } from ".";

const InitialState: GlobalContextProps = {
  state: {
    default: "",
    trendingAnimes: [{} as IAnimeProps],
  },
  setState: () => {},
};

export default InitialState;
