import React from "react";
import Image from "next/image";
import { message } from "antd";
import { useRouter } from "next/dist/client/router";

import { IAnime } from "shared/dto";
import { Container, Content } from "./styles";

interface ISliderCard {
  data: IAnime;
  disableClick?: boolean;
}

const SliderCard = ({ data, disableClick, ...rest }: ISliderCard) => {
  const router = useRouter();

  const handleAccessAnimePage = () => {
    if (disableClick) {
      message.warn('Recurso não disponível no momento')
      return
    }
    
    router.push(`/anime/${data.id}`);
  };

  return (
    <Container>
      <Content {...rest} onClick={handleAccessAnimePage}>
        <Image src={data?.attributes?.posterImage?.large || ""} layout="fill" />

        <div className="shadow" />

        <div className="info">
          <h3>{data.attributes.canonicalTitle}</h3>

          <section>
            <span>
              {data.attributes.episodeCount &&
                `episódio ${data.attributes.episodeCount}`}
            </span>

            <div className="note">
              {`${(Number(data.attributes.averageRating) / 10).toFixed(2)}/10`}
            </div>
          </section>
        </div>
      </Content>
    </Container>
  );
};

export default SliderCard;
