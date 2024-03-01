import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import {useState} from "react"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  //Criar um estado
  //Passar o estado para o value do input
  //Criar uma função para chamar no onChange do Input para alterar o estado

  const [titulo, setTitulo]=useState("Escreva um título")
  const[descricao, setDescricao] = useState("Escreva uma descrição")
  const[imagem, setImagem]= useState("https://down-br.img.susercontent.com/file/227840b19689e3a937549cbd4ad4553c")
  const [post, setPost]=useState({titulo:"", imagem:"", descricao:""})

  const changeTitulo=(event)=>{
    setTitulo(event.target.value)

  }

  const changeDescricao=(event)=>{
    setDescricao(event.target.value)
  }

  const changeImagem=(event)=>{
    setImagem(event.target.value)
  }

  const changePost=(event)=>{
    event.preventDefault()

    setPost({titulo:titulo, imagem:imagem, descricao:descricao})
  }


  return (
    <>
      <GlobalStyle />

      <Container>

        <FormularioPostagem 
        titulo={titulo}
        changeTitulo={changeTitulo}
        descricao={descricao}
        changeDescricao={changeDescricao}
        imagem={imagem}
        changeImagem={changeImagem}
        changePost={changePost}

        />

        <TelaDaPostagem 
         titulo={titulo}
         descricao={descricao}
         imagem={post.imagem}
        />

      </Container>
    </>
  );
}

export default App;
