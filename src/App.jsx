import Navbar from "./components/Navbar";
import "./App.css";
import { useState } from "react";
import { character, episodes, allCharacters } from "./data/characters";
import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";
const App = () => {
  const [characters,setCharacters] = useState(allCharacters)
  return (
    <div className="wrapper">
      <Navbar numOfResult={characters.length}/>
        <Main>
        <CharacterList characters={characters} />
        <CharacterDetail/>
        </Main>
    </div>
  );
};

export default App;

function Main({children }) {
  return <div className="main">{children}</div>;
}
