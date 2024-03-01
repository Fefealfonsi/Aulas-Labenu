import Carro from "./Carro";

function Garagem(props) {

  //const{nomeGaragem, funcao}=props//desestruturação

  console.log(props);
  return (
    <div>
      <h1>Garagem da {props.nomeGaragem}</h1>
      <button 
      onClick={()=>props.funcao(props.nomeGaragem)}>Dar boas vindas</button>
      <Carro carro={props.carro1} />
      <Carro carro={props.carro2}/>
      <Carro carro={props.carro3}/>
      <Carro carro={props.carro4}/>
    </div>
  );
}

export default Garagem;
