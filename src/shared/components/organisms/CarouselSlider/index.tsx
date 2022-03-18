import React, { HTMLAttributes } from "react";
import AliceCarousel from "react-alice-carousel";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import { IAnime } from "shared/dto";

import SliderCard from "./components/SliderCard";
import { Container } from "./styles";

interface ICarouselSliderProps extends HTMLAttributes<HTMLElement> {
  items: IAnime[];
}

const CarouselSlider = ({ items, children, ...rest }: ICarouselSliderProps) => {
  const responsivenessSettings = {
    0: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
    1366: { items: 4 },
    1600: { items: 4 },
  };

  return (
    <Container {...rest}>
      <AliceCarousel
        items={items?.map(
          (item) => item && <SliderCard data={item} key={item.id} />
        )}
        renderDotsItem={() => {}}
        renderNextButton={() => (
          <button>
            <FiArrowRight />
          </button>
        )}
        renderPrevButton={() => (
          <button>
            <FiArrowLeft />
          </button>
        )}
        responsive={responsivenessSettings}
        swipeDelta={70}
      />
    </Container>
  );
};

export default CarouselSlider;
