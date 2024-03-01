import fuscao from "../img/fusca.jpg"

export default function Carro(){
    return(
        <>
            <h2>Fusca</h2>
            <img className="imagem-carro" src={fuscao} alt="fusca azul" />
            <ul>
                <li>Cor: Azul</li>
                <li>Ano: 1970</li>
                <li>Flex: Não é Flex</li>
            </ul>
        </>
    )
}