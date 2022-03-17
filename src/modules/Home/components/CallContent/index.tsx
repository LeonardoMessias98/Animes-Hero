import React from "react";

import { Container, Title, Description, Button } from "./styles";

const CallContent = () => {
  return (
    <Container>
      <Title>
        Seus animes em <span>um</span> lugar só <span>.</span>
      </Title>

      <Description>
        Confira ao lado o <span>Top 3</span> da semana do nosso ranking de mais
        assistidos
        <span>.</span>
      </Description>

      <Button>Mais animes</Button>
    </Container>
  );
};

export default CallContent;
