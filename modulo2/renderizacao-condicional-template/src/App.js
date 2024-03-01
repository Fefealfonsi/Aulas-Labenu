import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaPrincipal from "./components/TelaPrincipal/TelaPrincipal.js";
import { useState } from "react"
const GlobalStyled = createGlobalStyle`
  html {
    font-family: sans-serif9;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {

  const [screen, setScreen] = useState("login")
  //TERNARIO=> condição? se condição true:se condição false
  //CURTO CIRCUITO=> condição && Só aparece se a condição for verdadeira 
  //STATEMENTS=> são instruções que não resultam em valores e não podem ser atribuídas a variáveis. Isso inclui condicionais (como if e else, switch/case) e loops (como while e for).
  const mudarTela=(tela)=>{
    setScreen(tela)
  }
  const telas = screen==="login"?
  <TelaLogin mudarTela={mudarTela}/>
  :
  <TelaCadastro mudarTela={mudarTela} />

  const tela = () => {

    switch (screen) {
      case "login":
        return <TelaLogin mudarTela={mudarTela} />
      case "cadastro":
        return <TelaCadastro mudarTela={mudarTela} />

      default:
        return <TelaPrincipal mudarTela={mudarTela}/>
    }
  }



  return (
    <MainContainer >
      <GlobalStyled />

      {screen==="login"&&<TelaLogin mudarTela={mudarTela} />}
      {screen==="cadastro"&&<TelaCadastro mudarTela={mudarTela} />}
      {screen==="principal"&&<TelaPrincipal mudarTela={mudarTela}/>}
   


    </MainContainer>
  );
}

export default App;