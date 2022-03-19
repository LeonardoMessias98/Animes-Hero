import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1800px;
  margin-top: 6rem;
  padding: 0 30px;

  h2 {
    color: #fff;
    font-weight: 600;
    font-size: 2.5rem;
    margin: 0;

    @media (max-width: 600px) {
      font-size: 3rem;
    }
  }
`;
