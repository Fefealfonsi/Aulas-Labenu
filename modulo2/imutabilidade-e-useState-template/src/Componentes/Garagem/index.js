import { Carro } from '../Carro'
import { Botao, Estacionamento, GaragemContainer } from './styles'
import {useState} from "react"

export function Garagem({nome, setNome}) {

  const [automovel, setAutomovel]=useState({modelo:"Corsa", cor:"branco", ano:2020, flex:true})


 const mudarNome=()=>{
  setNome("Miranda")
 }

 const carro1={
  modelo:"Fusca", 
  cor:"azul", 
  ano:1970, 
  flex:false}

 const carro2={
  modelo:"Kombi", 
  cor:"vermelha", 
  ano:1980, 
  flex:true}

 const carro3={
  modelo:"Brasilia", 
  cor:"amarela", 
  ano:1990, 
  flex:false}
 

  return (
    <GaragemContainer>
      {/* usando o meu estado */}
      <h1>Garagem da {nome}</h1>
      <Botao onClick={mudarNome}>Muda nome</Botao>

      <Estacionamento>
        <Carro
          automovel={automovel}
          adicionadoPor={nome}
          setAutomovel={setAutomovel}
          carro={carro1}

        />
        <Carro
          automovel={automovel}
          adicionadoPor={nome}
          setAutomovel={setAutomovel}
          carro={carro2}

        />
      </Estacionamento>
    </GaragemContainer>
  )
}
