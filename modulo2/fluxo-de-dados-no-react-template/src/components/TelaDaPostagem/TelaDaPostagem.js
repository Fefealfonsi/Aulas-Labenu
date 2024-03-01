import React from "react";
import { ContainerPostagem, Title, Image, Description } from "./TelaDaPostagem.styled";

const TelaDaPostagem = ({titulo, descricao, imagem}) => {

  return (
    <ContainerPostagem>
      <Title>{titulo}</Title>
      <Image src={imagem} />
      <Description>{descricao}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;
