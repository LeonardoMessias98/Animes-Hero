import React, { useContext } from "react";

import GlobalContext from "shared/providers/context/GlobalContext";

import { Container } from "./styles";
import CarouselSlider from "shared/components/organisms/CarouselSlider";

const AnimesSection = () => {
  const { state } = useContext(GlobalContext);

  return (
    <Container className="trending-animes">
      <h2>Trending animes</h2>

      <CarouselSlider items={state?.trendingAnimes} />

      <h2>Animes</h2>
      <CarouselSlider items={state?.animes} />

      {state?.animesByCategory?.map((animes, index) => (
        <>
          <h2>{state.categories[index].attributes.title}</h2>
          <CarouselSlider items={animes} />
        </>
      ))}
    </Container>
  );
};

export default AnimesSection;
