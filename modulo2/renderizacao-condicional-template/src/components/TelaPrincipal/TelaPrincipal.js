import { Div, Titulo } from "./styled";

function TelaPrincipal({mudarTela}) {


  return (
      <Div>
          <Titulo>Tela Principal</Titulo>
          <p>Boas-vindas à aplicação!</p>
          <button onClick={()=>mudarTela("login")}>Deslogar</button>
      </Div>
  )
}

export default TelaPrincipal;