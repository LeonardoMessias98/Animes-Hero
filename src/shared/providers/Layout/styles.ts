import styled from "styled-components";
import { Layout } from "antd";

export const Container = styled(Layout)`
  min-height: 100vh;
  height: max-content;
  align-items: center;
  background-color: ${(props) => props.theme.colors.backgroundColor};
`;

export const Content = styled(Layout.Content)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled(Layout.Header)``;
