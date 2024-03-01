import  Carro from "../Carro/Carro";
import { OrangeButton, GaragemContainer, Estacionamento } from "./styled";

export default function Garagem(props) {
  return (
    <GaragemContainer>
      <h1>Garagem da {props.nome}</h1>
      <OrangeButton onClick={props.mensagemAprentacao}>Mensagem</OrangeButton>
      <Estacionamento>
      <Carro adicionadoPor={props.nome} cor={"Vermelho"} ano={2022} flex={"true"} nomeCarro={"Fusca"} />
      <Carro adicionadoPor={props.nome} cor={"Verde"} ano={2020} flex={"false"}  nomeCarro={"Kombi"}/>
      <Carro adicionadoPor={props.nome} cor={"Amarelo"} ano={2009} flex={"false"} nomeCarro={"Brasilia"}/>
      <Carro adicionadoPor={props.nome} cor={"Rosa"} ano={2022} flex={"true"} nomeCarro={"Celta"}/>
      </Estacionamento>
    </GaragemContainer>
  );
}
