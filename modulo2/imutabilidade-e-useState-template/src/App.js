import { Garagem } from './Componentes/Garagem'
import { GlobalStyled } from './GlobalStyled'
// 1-como importar o useState do react
import {useState} from "react"

export default function App() {
  //2- como criar o estado
  const [nome, setNome] = useState("LABENU")
 
  return (
    <div className="App">
      <GlobalStyled />
      {/* passando estado por props */}
      <Garagem nome = {nome} setNome={setNome}/>
    </div>
  )
}
