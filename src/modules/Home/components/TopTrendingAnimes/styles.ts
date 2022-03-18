import styled from "styled-components";

interface ITrendingCardProps {
  focusedCard: number;
}

export const Container = styled.div`
  display: flex;
  align-items: center;

  z-index: 1;
`;

export const TrendingCard = styled.div<ITrendingCardProps>`
  width: 360px;
  height: 720px;
  margin: 0 0.75rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  img {
    border-radius: 16px;
    object-fit: cover;
  }

  transition: transform 0.4s;

  div.shadow {
    position: absolute;
    bottom: 0;

    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, transparent, #000000ba);
    border-radius: 1rem;
  }

  &:nth-child(${(props) => props.focusedCard}) {
    transform: scale(1.1);
    border: 6px solid ${(props) => props.theme.colors.primary};
    border-radius: 20px;

    .info {
      visibility: visible;
    }

    div.shadow {
      height: 40%;
      background: linear-gradient(
        180deg,
        transparent,
        ${(props) => props.theme.colors.primary}
      );
    }
  }

  .note {
    font-family: "Asap";
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.313rem;
    /* identical to box height */

    color: #ffffff;

    text-shadow: 0px 8px 25px rgba(0, 0, 0, 0.5);
  }

  .info {
    position: absolute;
    visibility: hidden;

    z-index: 5;
    bottom: 0;

    padding: 1rem;
    height: max-content;
    width: 100%;

    section {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h3 {
      font-family: "Asap";
      font-style: normal;
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 1.75rem;
      margin: 0;

      color: #ffffff;

      text-shadow: 0px 8px 25px rgba(0, 0, 0, 0.5);
    }

    span {
      font-family: "Asap";
      font-style: normal;
      font-weight: 500;
      font-size: 1.5rem;
      line-height: 1.75rem;

      color: #ffffff;

      text-shadow: 0px 8px 25px rgba(0, 0, 0, 0.5);
    }
  }
`;
