import React from "react";

import Header from "shared/components/molecules/Header";

import { Container, Content } from "./styles";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <Container>
      <Header />

      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
