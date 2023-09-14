import Navbar from "./components/Navbar";
import "./App.css";
import { useEffect, useState } from "react";
import { character, episodes, allCharacters } from "./data/characters";
import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";
import CircularIndeterminate from "./components/Loader";
import { Toaster, toast } from "react-hot-toast";
const App = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeCharacter, setActiveCharacter] = useState(character);
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await fetch("https://rickandmortyapi.com/api/character");
        if (!res.ok) throw new Error("something went wrong!");
        console.log(res);
        const data = await res.json();
        setCharacters(data.results);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);
  const showHandler = (id) => {
    const activeCharacter = characters.filter((c) => {
      return c.id == id;
    });
    setActiveCharacter(activeCharacter[0]);
  };
  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch("https://rickandmortyapi.com/api/characterd")
  //   .then((res)=>{
  //     if(!res.ok) throw new Error("something went wrong!!")
  //     return res.json()
  //   })
  //   .then((data)=> setCharacters(data.results))
  //   .catch((err)=>toast.error(err.message))
  //   .finally(()=> setIsLoading(false))
  // }, []);
  return (
    <div className="wrapper">
      <Toaster />
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
