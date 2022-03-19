import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 1800px;
  padding: 0 30px;

  h2 {
    display: flex;
    align-items: center;

    color: #fff;
    font-weight: 600;
    font-size: 2.5rem;
    margin: 0;

    @media (max-width: 600px) {
      font-size: 4rem;
    }
  }
`;
