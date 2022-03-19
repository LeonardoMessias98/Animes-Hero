import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 10;

  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff00;
  backdrop-filter: blur(20px);
  margin-top: -166px;

  > div {
    &,
    > iframe {
      width: 100%;
      max-width: 900px;

      @media (max-width: 900px) {
        height: 100%;
      }
    }
  }

  svg {
    position: absolute;
    color: #fff;
    font-size: 4rem;
    top: 35px;
    right: 35px;
    cursor: pointer;
  }
`;
