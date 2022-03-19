import React, { useContext } from "react";

import CarouselSlider from "shared/components/organisms/CarouselSlider";
import GlobalContext from "shared/providers/context/GlobalContext";

import { Container } from "./styles";

const RelatedContent = () => {
  const { state } = useContext(GlobalContext);
  return (
    <Container>
      <h2>Conteúdos relacionados</h2>
      <CarouselSlider items={state.relatedAnimes} />
    </Container>
  );
};

export default RelatedContent;
