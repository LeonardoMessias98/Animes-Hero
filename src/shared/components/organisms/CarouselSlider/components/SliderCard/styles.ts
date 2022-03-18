import styled from "styled-components";

export const Container = styled.div`
  width: 360px;
  height: 522px;
  margin-right: 1rem;
  position: relative;
  cursor: pointer;

  img {
    border-radius: 16px;
  }

  div.shadow {
    position: absolute;
    bottom: 0;

    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, transparent, #000000ba);
    border-radius: 1rem;
  }

  &:hover {
    border: 4px solid ${(props) => props.theme.colors.primary};
    transform: scale(1.1);
    border-radius: 22px;

    .info {
      visibility: visible;
    }

    div.shadow {
      width: 101%;
      left: -1px;
      bottom: -1px;

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
    font-size: 32px;
    line-height: 37px;

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
      font-size: 24px;
      line-height: 28px;
      margin: 0;

      color: #ffffff;

      text-shadow: 0px 8px 25px rgba(0, 0, 0, 0.5);
    }

    span {
      font-family: "Asap";
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 28px;

      color: #ffffff;

      text-shadow: 0px 8px 25px rgba(0, 0, 0, 0.5);
    }
  }
`;
