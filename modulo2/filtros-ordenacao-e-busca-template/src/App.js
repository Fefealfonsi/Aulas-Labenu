import styled, { createGlobalStyle } from "styled-components";
import pokemons from "./pokemon/pokemon.json";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getColors } from "./utils/ReturnCardColor";
import Header from "./components/Header/Header.js";
import { useState } from "react"


function App() {

  const [filterId, setFilterId] = useState("")
  const [filterName, setFilterName] = useState("")
  const [filterType, setFilterType] = useState("")

  const changeName = (event) => {
    setFilterName(event.target.value)
  }
  const changeId = (event) => {
    setFilterId(event.target.value)
  }

  const changeType=(event)=>{
    setFilterType(event.target.value)
  }



  console.log(filterType);
  return (
    <>
      <GlobalStyle />
      <Header
        filterId={filterId}
        changeId={changeId}

        filterName={filterName}
        changeName={changeName}

        filterType={filterType}
        changeType={changeType}


      />
      <CardsContainer>
        {pokemons.filter((pokemon) => {

          if (filterId) {
            return pokemon.id === filterId
          } else {
            return pokemon
          }

        }).filter((pokemon) => {

          return filterName ? pokemon.name.english.includes(filterName) : pokemon

        }).filter((pokemon)=>{
          console.log(pokemon.type);
          return filterType? (pokemon.type[0]===filterType ||pokemon.type[1]===filterType):pokemon
        }).map((pokemon) => {
          return <PokemonCard
            cardColor={getColors(pokemon.type[0])}
            key={pokemon.id}
            pokemon={pokemon}
          />
        })
        }
      </CardsContainer>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
`;