import imagem from "./7-150x100.jpg"
import './App.css';

function App() {


  const abrirNoticia = () => {
    alert("Abrindo Notícia")
  }


  return (
    <>
      <header>
        <h1>LabeNotícias</h1>
      </header>

      <main>
        <article className="card">
          <h2 className="categoria">Notícias</h2>
          <div className="noticia">

            <img src={imagem} alt="mesa de reunião" />
            <h3>título da notícia</h3>
            <p>descrição da notícia</p>
            <button onClick={abrirNoticia}>Eu quero Ler</button>
          </div>
          <div className="noticia">

            <img src={imagem} alt="mesa de reunião" />
            <h3>título da notícia</h3>
            <p>descrição da notícia</p>
            <button onClick={abrirNoticia}>Eu quero Ler</button>
            <hr />
          </div>
        </article>
        <article className="card">
          <h2 className="categoria">Lazer</h2>
          <div className="noticia">

            <img src={imagem} alt="mesa de reunião" />
            <h3>título da notícia</h3>
            <p>descrição da notícia</p>
            <button onClick={abrirNoticia}>Eu quero Ler</button>
          </div>

        </article>
      </main>


      <footer>
        <p>copyrigth@ 2022 Labenu All rights reserved</p>
      </footer>
    </>


  );
}

export default App;
