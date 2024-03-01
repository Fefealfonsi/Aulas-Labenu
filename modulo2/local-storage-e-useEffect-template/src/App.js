import { useEffect, useState } from "react";

export default function App() {
  // Estado para armazenar a lista de compras
  const [listaCompras, setListaCompras] = useState([]);

  // Estado para armazenar o valor do item sendo digitado
  const [item, setItem] = useState("");

  // Função para adicionar um item à lista de compras
  const adicionarItem = () => {
    if (item.trim() !== "") {
      // Verifica se o item não está vazio ou contém apenas espaços em branco
      setListaCompras([...listaCompras, item]); // Adiciona o item à lista de compras
      setItem(""); // Limpa o campo de entrada
    }
  };

  function addNoLocalStorage(){
    //localStorage aceita apenas string
    
    localStorage.setItem("lista",JSON.stringify(listaCompras) )
    //O método
    //O metodo JSON.stringify() transforma objetos e arrays em uma string no mesmo formato...Ex`["maçã","lima"]` 

  }

  function apagarLista() {

    localStorage.removeItem("lista")
    setListaCompras([])
  }

  function pegarNoLocalStorage(){
    const listaSalva=JSON.parse(localStorage.getItem("lista"))

   listaSalva && setListaCompras(listaSalva)
  }

 

  useEffect(()=>{
    if(listaCompras.length>0){

      addNoLocalStorage()
    }
  }, [listaCompras])

  useEffect(()=>{
    
    pegarNoLocalStorage()

  },[])


  return (
    <div>
      <h1>Lista de Compras</h1>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Digite um item"
      />
      <button onClick={adicionarItem}>Adicionar</button>
      <button onClick={apagarLista}>Remover Lista inteira</button>
      {/* <button onClick={addNoLocalStorage}>Adicionar no localStorage</button>
      <button onClick={pegarNoLocalStorage}>Pegar no localStorage</button> */}

      <ul>
        {listaCompras.map((compra, index) => (
          <li key={index}>{compra}</li>
        ))}
      </ul>
    </div>
  );
}
