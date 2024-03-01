import {CarroContainer, Caracteristicas} from './style'
export default function Carro(props) {
    return (
      <CarroContainer>
        <h2>{props.nomeCarro}</h2>
        <ul>
          <Caracteristicas>Cor: {props.cor}</Caracteristicas>
          <Caracteristicas>Ano: {props.ano}</Caracteristicas>
          <Caracteristicas>Flex: {props.flex}</Caracteristicas>
          <Caracteristicas>Adicionado: {props.adicionadoPor}</Caracteristicas>
        </ul>
      </CarroContainer>
    );
  }
  
