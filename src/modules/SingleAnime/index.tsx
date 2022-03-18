import React, { useContext, useState } from "react";

import GlobalContext from "shared/providers/context/GlobalContext";
import AnimeContent from "./AnimeContent";
import RelatedContent from "./RelatedContent";
import { Container } from "./styles";
import TrailerModal from "./TrailerModal";

const SingleAnime = () => {
  const [showTrailerModal, setShowTrailerModal] = useState(false);
  const { state } = useContext(GlobalContext);

  const handleShowTrailerModal = () => {
    setShowTrailerModal(!showTrailerModal);
  };

  return (
    <>
      {state.singleAnime?.attributes?.youtubeVideoId && showTrailerModal && (
        <TrailerModal onDisplayTrailer={handleShowTrailerModal} />
      )}

      <Container>
        <AnimeContent onDisplayTrailer={handleShowTrailerModal} />
        <RelatedContent />
      </Container>
    </>
  );
};

export default SingleAnime;
