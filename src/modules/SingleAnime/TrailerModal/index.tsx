import React, { useContext } from "react";
import { FiX } from "react-icons/fi";
import YouTube from "react-youtube";

import GlobalContext from "shared/providers/context/GlobalContext";

import { Container } from "./styles";

interface ITrailerModalProps {
  onDisplayTrailer: () => void;
}

const TrailerModal = ({ onDisplayTrailer }: ITrailerModalProps) => {
  const { state } = useContext(GlobalContext);

  const handleDisplayTrailerModal = () => {
    if (onDisplayTrailer) onDisplayTrailer();
  };

  return (
    <Container>
      <FiX onClick={handleDisplayTrailerModal} />
      <YouTube
        videoId={state.singleAnime?.attributes?.youtubeVideoId}
        opts={{
          width: "900",
          height: "500",
          playerVars: {
            autoplay: 1,
            controls: 2,
            loop: 1,
          },
        }}
      />
    </Container>
  );
};

export default TrailerModal;
