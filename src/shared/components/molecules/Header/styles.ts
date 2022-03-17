import { Layout } from "antd";
import styled from "styled-components";

export const Container = styled(Layout.Header)`
  display: flex;
  justify-content: space-between;

  width: 100%;
  max-width: 1900px;

  padding: 4rem 4rem 2rem;

  figure.logo {
    position: relative;
    width: 180px;
    height: 56px;
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
