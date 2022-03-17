import React, { useContext } from "react";

import Layout from "shared/providers/Layout";
import GlobalContext from "shared/providers/context/GlobalContext";
import { Content } from "./styles";

const Home = () => {
  const { state, setState } = useContext(GlobalContext);

  const trendingAnimes = state?.trendingAnimes;

  console.log(trendingAnimes, "trendingAnimes");

  return (
    <Layout>
      <Content>
        <div className="call">
          <h1>
            Seus animes em <span>um</span> lugar só <span>.</span>
          </h1>

          <p>
            Confira ao lado o <span>Top 3</span> da semana do nosso ranking de
            mais assistidos
            <span>.</span>
          </p>

          <button>Mais animes</button>
        </div>
      </Content>

      {/* {trendingAnimes?.map((anime) => (
        <img src={anime.attributes.posterImage.medium} />
      ))} */}
    </Layout>
  );
};

export default Home;
