import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [lista, setLista]=useState([
    {id:1, tarefa:"Estudar"},
    {id:2, tarefa:"Descansar"},
    {id:3, tarefa:"Chorar porque sou um impostor"},
    {id:4, tarefa:"parar de chorar, colocar um croped e reagir"} ])

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };
  console.log(novaTarefa)
  const adicionaTarefa = () => {
    lista.push({id:Date.now(), tarefa:novaTarefa})
    setNovaTarefa("")
  };

  const removeTarefa = (itemParaRemover) => {
    const listaFiltrada = lista.filter((cadaItem)=>{
return cadaItem.id!==itemParaRemover
    })

   setLista(listaFiltrada)
  };

  const listaModificada=lista.map((cadaItem)=>{
    return <Tarefa key={cadaItem.id}>
    <p>{cadaItem.tarefa}</p>
    <RemoveButton onClick={()=>removeTarefa(cadaItem.id)}>
      <img src={bin} alt="" width="16px" />
    </RemoveButton>
  </Tarefa>
  })

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        <ul>
          {listaModificada}
        </ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
