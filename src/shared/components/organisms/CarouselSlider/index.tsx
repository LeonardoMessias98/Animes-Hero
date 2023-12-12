import React, { HTMLAttributes } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import { IAnime } from "shared/dto";

import SliderCard from "./components/SliderCard";
import { Container } from "./styles";

interface ICarouselSliderProps extends HTMLAttributes<HTMLElement> {
  items: IAnime[];
  disableClick?: boolean;
}

const CarouselSlider = ({
  items,
  children,
  disableClick,
  ...rest
}: ICarouselSliderProps) => {
  const responsivenessSettings = {
    0: { items: 1 },
    790: { items: 2 },
    1160: { items: 2 },
    1200: { items: 3 },
    1520: { items: 4 },
  };

  return (
    <Container {...rest}>
      <AliceCarousel
        autoWidth
        items={items?.map(
          (item) =>
            item && (
              <SliderCard
                data={item}
                key={item.id}
                disableClick={disableClick}
              />
            )
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
