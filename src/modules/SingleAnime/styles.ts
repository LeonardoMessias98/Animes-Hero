import styled from "styled-components";

interface IContentProps {
  imageUrl: string;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;

  position: relative;
  width: 100%;
  height: 100%;
`;

export const TrailerModal = styled.div`
  position: absolute;
  z-index: 10;

  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff00;
  backdrop-filter: blur(20px);
  margin-top: -170px;

  svg {
    position: absolute;
    color: #fff;
    font-size: 2rem;
    top: 25px;
    right: 25px;
    cursor: pointer;
  }
`;

export const Content = styled.div<IContentProps>`
  display: flex;
  justify-content: center;

  position: absolute;
  top: -170px;

  width: 100%;
  height: 800px;
  padding: 0 4rem;

  background: linear-gradient(359deg, #1f2429, transparent),
    url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;

  .wrapper {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    width: 100%;
    max-width: 1800px;
  }

  .options {
    h1 {
      font-family: "Asap";
      font-style: normal;
      font-weight: 700;
      font-size: 64px;
      line-height: 73px;
      margin: 0;

      color: #ffffff;

      text-shadow: 0px 8px 25px rgba(0, 0, 0, 0.5);
    }

    .animeInfo {
      span {
        font-family: "Asap";
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 37px;

        color: #ff0066;

        text-shadow: 0px 8px 25px rgba(0, 0, 0, 0.5);
      }
    }

    button {
      margin-top: 60px;
      border: 4px solid #ff0066;
      background: none;
      box-sizing: border-box;
      border-radius: 16px;
      width: 264px;
      height: 64px;
      cursor: pointer;

      font-family: "Asap";
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 37px;
      color: #ffffff;

      text-shadow: 0px 8px 25px rgba(0, 0, 0, 0.5);
    }
  }

  .sinopse {
    width: 100%;
    max-width: 881px;

    h3 {
      color: ${(props) => props.theme.colors.primary};
      font-weight: 700;
    }

    p {
      color: #fff;
      margin: 0;
    }

    h3,
    p {
      font-family: "Asap";
      font-style: normal;
      font-size: 32px;
      line-height: 37px;
      text-align: justify;

      text-shadow: 0px 8px 25px rgba(0, 0, 0, 0.5);
    }
  }
`;
