import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {

  const nome="Turma Miranda"

  function apresentaGaragem(nome) {
    alert(`Boas vindas à garagem de ${nome} `)
  }

  const carro1={
    nome:"Fusca",
    cor:"Azul",
    ano:"1970",
    flex: false
  }

  const carro2={
    nome:"Kombi",
    cor:"Vermelha",
    ano:"1980",
    flex: false
  }

  const carro3={
    nome:"Brasilia",
    cor:"Amarela",
    ano:"1990",
    flex: false
  }

  const carro4={
    nome:"Corsa",
    cor:"Preto",
    ano:"2000",
    flex: true
  }
  const carro5={
    nome:"BMW",
    cor:"Preto",
    ano:"2023",
    flex: true
  }
  const carro6={
    nome:"Ferrari",
    cor:"Vermelha",
    ano:"2021",
    flex: true
  }
  const carro7={
    nome:"Porshe",
    cor:"Prata",
    ano:"2022",
    flex: true
  }
  const carro8={
    nome:"Camaro",
    cor:"Amarelo",
    ano:"2015",
    flex: true
  }
  return (
    <div className="garagem-container">
      <Garagem 
      nomeGaragem={nome}
      funcao={apresentaGaragem}
      carro1={carro1}
      carro2={carro2}
      carro3={carro3}
      carro4={carro4}
      />
      <Garagem
      nomeGaragem={"Luiz Hamilton"}
      funcao={apresentaGaragem}
      carro1={carro5}
      carro2={carro6}
      carro3={carro7}
      carro4={carro8}
      />
    </div>
  );
}
