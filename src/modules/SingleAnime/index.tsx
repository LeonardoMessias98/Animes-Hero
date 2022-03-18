import React, { useContext, useState } from "react";
import { FiX } from "react-icons/fi";
import YouTube from "react-youtube";

import GlobalContext from "shared/providers/context/GlobalContext";
import { Container, Content, TrailerModal } from "./styles";

const SingleAnime = () => {
  const [showTrailerModal, setShowTrailerModal] = useState(false);
  const { state } = useContext(GlobalContext);

  const handleShowTrailerModal = () => {
    setShowTrailerModal(!showTrailerModal);
  };

  return (
    <>
      {state.singleAnime?.attributes?.youtubeVideoId && showTrailerModal && (
        <TrailerModal>
          <FiX onClick={handleShowTrailerModal} />
          <YouTube
            videoId={state.singleAnime?.attributes?.youtubeVideoId}
            opts={{
              width: "900",
              height: "500",
              playerVars: {
                autoplay: 1,
                controls: 0,
              },
            }}
          />
        </TrailerModal>
      )}

      <Container>
        <Content imageUrl={state.singleAnime?.attributes?.coverImage?.large}>
          <div className="wrapper">
            <div className="options">
              <h1>{state.singleAnime?.attributes?.canonicalTitle}</h1>

              <section className="animeInfo">
                <span>
                  {`${(
                    Number(state.singleAnime?.attributes?.averageRating) / 10
                  ).toFixed(2)}/10`}
                </span>
              </section>

              <button onClick={handleShowTrailerModal}>Assistir</button>
            </div>

            <div className="sinopse">
              <h3>Sinopse:</h3>
              <p>{state.singleAnime?.attributes?.synopsis}</p>
            </div>
          </div>
        </Content>
      </Container>
    </>
  );
};

export default SingleAnime;
