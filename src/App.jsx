import Navbar from "./components/Navbar";
import "./App.css";
import { useEffect, useState } from "react";
import { character, episodes, allCharacters } from "./data/characters";
import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";
import CircularIndeterminate from "./components/Loader";
const App = () => {
  const [characters, setCharacters] = useState(allCharacters);
  const [isLoading, setIsLoading] = useState(false);
  const [activeCharacter, setActiveCharacter] = useState(characters[0]);
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      setCharacters(data.results);
      setIsLoading(false);
    }
    fetchData();
  }, []);
  const showHandler = (id) => {
    const activeCharacter = characters.filter((c) => {
      return c.id == id;
    });
    setActiveCharacter(activeCharacter[0]);
  };
  return (
    <div className="wrapper">
      <Navbar numOfResult={characters.length} />
      <Main>
        <CharacterList
          onShowCharacter={showHandler}
          characters={characters}
          isLoading={isLoading}
        />
        <CharacterDetail character={activeCharacter} />
      </Main>
    </div>
  );
};

export default App;

function Main({ children }) {
  return <div className="main">{children}</div>;
}
