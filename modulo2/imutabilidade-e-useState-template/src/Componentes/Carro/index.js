import { CarroContainer, Botao } from './styles'

export function Carro({ automovel, adicionadoPor, setAutomovel, carro }) {

  const{modelo, cor, ano, flex} = automovel
  
  function MudarCarro() {

    setAutomovel(carro) 
    
  }
  return (
    <CarroContainer>
      <h2>{modelo}</h2>
      <ul>
        <li>Cor: {cor}</li>
        <li>Ano: {ano}</li>
        <li>Flex: {flex ? 'Sim' : 'Não'}</li>
        <li>Adicionado: {adicionadoPor}</li>
      </ul>
      <Botao onClick={MudarCarro}>Mudar Carro</Botao>

    </CarroContainer>
  )
}
