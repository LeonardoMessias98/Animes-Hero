import React, { useContext } from "react";

import CarouselSlider from "shared/components/organisms/CarouselSlider";
import GlobalContext from "shared/providers/context/GlobalContext";

import { Container } from "./styles";

const RelatedContent = () => {
  const { state } = useContext(GlobalContext);
  const relatedMangas = state.relatedMangas;

  const mangasWithImage = relatedMangas?.filter(
    (manga) => manga.attributes.posterImage.large
  );

  return (
    <Container>
      <h2>Mangas relacionados</h2>
      <CarouselSlider items={mangasWithImage} disableClick />
    </Container>
  );
};

export default RelatedContent;
