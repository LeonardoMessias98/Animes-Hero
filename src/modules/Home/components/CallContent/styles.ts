import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: 0;

  width: 100%;
  max-width: 770px;
  z-index: 2;

  span {
    color: ${(props) => props.theme.colors.primary} !important;
  }
`;

export const Title = styled.h1`
  font-family: "Asap", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 124px;
  line-height: 114px;

  color: #ffffff;

  text-shadow: 0px 8px 60px #000000;
`;

export const Description = styled.p`
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
`;

export const Button = styled.button`
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
`;
