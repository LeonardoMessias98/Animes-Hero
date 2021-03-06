import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: 0;

  width: 100%;
  max-width: 770px;
  margin-left: 30px;
  z-index: 2;

  span {
    color: ${(props) => props.theme.colors.primary} !important;
  }

  @media (max-width: 1200px) {
    position: relative;
    margin-top: 4rem;
    margin-left: 0;
  }
`;

export const Title = styled.h1`
  font-family: "Asap", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 7.75rem;
  line-height: 7.125rem;

  color: #ffffff;

  text-shadow: 0 0.5rem 3.75rem #000000;
`;

export const Description = styled.p`
  font-family: "Asap", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.75rem;

  color: #ffffff;
  width: 100%;
  max-width: 420px;

  text-shadow: 0px 8px 25px rgba(0, 0, 0, 0.5);

  margin: 4rem 0;
`;

export const Button = styled.button`
  width: 16.5rem;
  height: 5rem;

  border: 4px solid ${(props) => props.theme.colors.primary};
  box-sizing: border-box;
  border-radius: 16px;
  background-color: transparent;

  font-family: "Asap", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.75rem;

  color: #ffffff;
  cursor: pointer;

  text-shadow: 0px 8px 25px rgba(0, 0, 0, 0.5);

  transition: transform 0.4s;

  &:hover {
    transform: translateY(-5%);
  }
`;
