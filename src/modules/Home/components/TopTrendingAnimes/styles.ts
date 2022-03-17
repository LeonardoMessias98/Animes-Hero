import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  z-index: 1;

  div.card {
    width: 360px;
    height: 720px;
    margin: 0 0.5rem;
    position: relative;

    img {
      border-radius: 16px;
      object-fit: cover;
    }

    &:nth-child(2) {
      width: 392px;
      height: 784px;

      border: 4px solid #ff0066;
      border-radius: 20px;
    }
  }
`;
