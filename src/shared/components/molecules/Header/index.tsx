import React from "react";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";

import logo from "../../../assets/icons/logo.svg";
import search_button from "../../../assets/icons/search_button.svg";

import { Container, SearchButton } from "./styles";

const Header = () => {
  const router = useRouter();

  const handleAccessSearchPage = () => {
    router.push("/search");
  };

  const handleAccessMainPage = () => {
    router.push("/");
  };

  return (
    <Container>
      <figure className="logo" onClick={handleAccessMainPage}>
        <Image src={logo} layout="fill" />
      </figure>

      <SearchButton onClick={handleAccessSearchPage}>
        <Image src={search_button} layout="fill" />
      </SearchButton>
    </Container>
  );
};

export default Header;
