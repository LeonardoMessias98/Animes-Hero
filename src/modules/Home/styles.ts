import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;

  width: 100%;
  height: max-content;
  max-width: 1800px;
  padding: 30px;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;
