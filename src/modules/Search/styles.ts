import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 1800px;
  padding: 30px;

  h2 {
    font-family: "Asap";
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
    line-height: 55px;
    margin: 4rem 0 0;

    color: #ffffff;

    text-shadow: 0px 8px 25px rgba(0, 0, 0, 0.5);
  }

  div.results {
    display: flex;
    flex-wrap: wrap;

    width: 100%;

    > div {
      margin: 30px 25px;
    }

    @media (max-width: 1350px) {
      justify-content: center;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem 0;
  background: #383838;
  border-radius: 16px;
  border: none;
  outline: none;

  font-family: "Asap";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 46px;

  text-align: center;

  color: #ffffff;

  text-shadow: 0px 8px 25px rgba(0, 0, 0, 0.5);
`;
