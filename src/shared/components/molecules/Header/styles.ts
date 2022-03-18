import { Layout } from "antd";
import styled from "styled-components";

export const Container = styled(Layout.Header)`
  display: flex;
  justify-content: space-between;
  background: none !important ;

  width: 100%;
  max-width: 1900px;
  z-index: 5;

  padding: 4rem 4rem 2rem;

  figure.logo {
    position: relative;
    width: 180px;
    height: 56px;
    cursor: pointer;
  }
`;

export const SearchButton = styled.button`
  background: none;
  border: none;

  position: relative;
  height: 56px;
  width: 62px;

  cursor: pointer;
`;
