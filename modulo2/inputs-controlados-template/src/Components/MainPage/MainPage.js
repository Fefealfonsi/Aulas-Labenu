import React from 'react'
import { MainContainer, Form, Input } from './styles'
import{useState} from "react"
function MainPage() {

  //criar um estado para cada input
  //Chamar o estado no atributo value do input
  // Criar funções de onChange para mudar o estado, e chamá-la no evento onchange do input. 
  const[name, setName]= useState("")
  const [age, setAge]= useState("")
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  const [maritalStatus, setMaritalStatus]=useState("")

  const changeName=(event)=>{
    setName(event.target.value)
  }
  const changeAge=(event)=>{
    setAge(event.target.value)
  }
  const changeEmail=(event)=>{
    setEmail(event.target.value)
  }
  const changePassword=(event)=>{
    setPassword(event.target.value)
  }
  const changeMaritalStatus=(event)=>{
    setMaritalStatus(event.target.value)

  }
  const limparInputs=()=>{
    setName("")
    setAge("")
    setEmail("")
    setPassword("")
    setMaritalStatus("Nenhum")

  }

  
  const imprimirValorDoInput=(event)=>{
    event.preventDefault()
    console.log(name, age, email, maritalStatus);
    limparInputs()

  }
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input value={name} onChange={changeName}/>
        </label>
        <label>
          Idade:
          <Input value={age} onChange={changeAge}/>
        </label>
        <label>
          Email:
          <Input value={email} onChange={changeEmail}/>
        </label>
        <label>
          Senha:
          <Input value={password} onChange={changePassword}/>
        </label>
        <select value={maritalStatus} onChange={changeMaritalStatus}>
          <option>Nenhum</option>
          <option>Solteiro(a)</option>
          <option>Casado(a)</option>
          <option>Viúvo(a)</option>
        </select>
        <button onClick={imprimirValorDoInput}>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
