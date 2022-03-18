import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 1800px;
  margin-top: 4rem;

  h2 {
    display: flex;
    align-items: center;

    color: #fff;
    font-weight: 600;
    font-size: 2.5rem;
    margin: 0;

    svg {
      color: ${(props) => props.theme.colors.primary};
      margin: 0 0.5rem;
    }

    @media (max-width: 600px) {
      font-size: 4rem;
    }
  }
`;
