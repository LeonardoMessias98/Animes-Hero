import styled from "styled-components";

interface IContainer {
  imageUrl: string;
}

export const Container = styled.div<IContainer>`
  display: flex;
  justify-content: center;

  position: relative;
  top: -170px;

  width: 100%;
  height: 800px;
  padding: 0 4rem;

  background: linear-gradient(359deg, #1f2429 3%, transparent),
    url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
`;

export const Wrapper = styled.section`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  width: 100%;
  max-width: 1800px;

  .options {
    margin-right: 4rem;

    h1 {
      font-family: "Asap";
      font-style: normal;
      font-weight: 700;
      font-size: 4rem;
      line-height: 4.563rem;
      margin: 0;

      color: #ffffff;

      text-shadow: 0px 8px 25px rgba(0, 0, 0, 0.5);
    }

    .animeInfo {
      span {
        font-family: "Asap";
        font-style: normal;
        font-weight: 700;
        font-size: 2rem;
        line-height: 2.313rem;

        color: #ff0066;

        text-shadow: 0px 8px 25px rgba(0, 0, 0, 0.5);
      }
    }

    button {
      margin-top: 3.75rem;
      border: 4px solid #ff0066;
      background: none;
      box-sizing: border-box;
      border-radius: 16px;
      width: 16.5rem;
      height: 4rem;
      cursor: pointer;

      font-family: "Asap";
      font-style: normal;
      font-weight: 700;
      font-size: 2rem;
      line-height: 2.313rem;
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

      max-height: 300px;
      overflow-y: auto;
    }

    h3,
    p {
      font-family: "Asap";
      font-style: normal;
      font-size: 2rem;
      line-height: 2.313rem;
      text-align: justify;

      text-shadow: 0px 8px 25px rgba(0, 0, 0, 0.5);
    }
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 170px;

    .options {
      margin-bottom: 4rem;
    }
  }
`;
