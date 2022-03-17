import React from "react";

import Image from "next/image";
import logo from "../../../assets/icons/logo.svg";
import search_button from "../../../assets/icons/search_button.svg";

import { Container, SearchButton } from "./styles";

const Header = () => {
  return (
    <Container>
      <figure className="logo">
        <Image src={logo} layout="fill" />
      </figure>

      <SearchButton>
        <Image src={search_button} layout="fill" />
      </SearchButton>
    </Container>
  );
};

export default Header;
