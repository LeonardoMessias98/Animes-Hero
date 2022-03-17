import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  position: relative;

  width: 100%;
  max-width: 1800px;

  .call {
    width: 100%;
    max-width: 770px;

    h1 {
      font-family: "Asap", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 124px;
      line-height: 142px;

      color: #ffffff;

      text-shadow: 0px 8px 60px #000000;
    }

    span {
      color: ${(props) => props.theme.colors.primary} !important;
    }

    p {
      font-family: "Asap", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;

      color: #ffffff;
      width: 100%;
      max-width: 420px;

      text-shadow: 0px 8px 25px rgba(0, 0, 0, 0.5);

      margin: 4rem 0;
    }

    button {
      width: 264px;
      height: 64px;

      border: 4px solid ${(props) => props.theme.colors.primary};
      box-sizing: border-box;
      border-radius: 16px;
      background-color: transparent;

      font-family: "Asap", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;

      color: #ffffff;
      cursor: pointer;

      text-shadow: 0px 8px 25px rgba(0, 0, 0, 0.5);
    }
  }
`;
