import React, { useContext, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";

import GlobalContext from "shared/providers/context/GlobalContext";
import { IAnime } from "shared/dto";

import { Container, TrendingCard } from "./styles";

const TopTrendingAnimes = () => {
  const { state } = useContext(GlobalContext);
  const [focusedCard, setFocusedCard] = useState(2);

  const router = useRouter();
  const trendingAnimes = state?.trendingAnimes;

  const topThreeTrending = trendingAnimes?.slice(0, 3);

  const handleAccessAnimePage = (anime: IAnime) => {
    router.push(`/anime/${anime.id}`);
  };

  return (
    <Container>
      {topThreeTrending?.map((anime, index) => (
        <TrendingCard
          key={anime.id}
          focusedCard={focusedCard}
          onMouseEnter={() => setFocusedCard(index + 1)}
          onClick={() => handleAccessAnimePage(anime)}
        >
          <Image src={anime.attributes.posterImage.original} layout="fill" />

          <div className="shadow" />

          <div className="info">
            <h3>{anime.attributes.canonicalTitle}</h3>

            <section>
              <span>
                {anime.attributes.episodeCount &&
                  `episodio ${anime.attributes.episodeCount}`}
              </span>

              <div className="note">
                {`${(Number(anime.attributes.averageRating) / 10).toFixed(
                  2
                )}/10`}
              </div>
            </section>
          </div>
        </TrendingCard>
      ))}
    </Container>
  );
};

export default TopTrendingAnimes;
