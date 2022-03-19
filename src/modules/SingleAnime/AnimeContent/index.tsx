import React, { useContext } from "react";

import GlobalContext from "shared/providers/context/GlobalContext";

import { Container, Wrapper } from "./styles";

interface IAnimeContentProps {
  onDisplayTrailer: () => void;
}

const AnimeContent = ({ onDisplayTrailer }: IAnimeContentProps) => {
  const { state } = useContext(GlobalContext);

  const handleDisplayTrailerModal = () => {
    if (onDisplayTrailer) onDisplayTrailer();
  };

  return (
    <Container imageUrl={state.singleAnime?.attributes?.coverImage?.large}>
      <Wrapper>
        <div className="options">
          <h1>{state.singleAnime?.attributes?.canonicalTitle}</h1>

          <section className="animeInfo">
            <span>
              {`${(
                Number(state.singleAnime?.attributes?.averageRating) / 10
              ).toFixed(2)}/10`}
            </span>
          </section>

          {state.singleAnime?.attributes?.youtubeVideoId && (
            <button onClick={handleDisplayTrailerModal}>Assistir</button>
          )}
        </div>

        <div className="sinopse">
          <h3>Sinopse:</h3>
          <p>{state.singleAnime?.attributes?.synopsis}</p>
        </div>
      </Wrapper>
    </Container>
  );
};

export default AnimeContent;
