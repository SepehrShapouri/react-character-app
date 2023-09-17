import Navbar, { Search, SearchResults } from "./components/Navbar";
import "./App.css";
import { useEffect, useState } from "react";
import { character, episodes, allCharacters } from "./data/characters";
import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";
import CircularIndeterminate from "./components/Loader";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
const App = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeCharacter, setActiveCharacter] = useState(character);
  const [query,setQuery] = useState("")
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character?name=${query}`
        );
        setCharacters(data.results);
      } catch (error) {
        toast.error(error.response.data.error);
      } finally {
        setIsLoading(false);
      }
    }
    if(query.length < 3){
      setCharacters([])
      return;
    }
    fetchData();
  }, [query]);
  const showHandler = (id) => {
    const activeCharacter = characters.filter((c) => {
      return c.id == id;
    });
    setActiveCharacter(activeCharacter[0]);
  };
  // useEffect(() => {
  //   setIsLoading(true);
  //   axios.get("https://rickandmortyapi.com/api/characterd")
  //   .then(({data})=>{
  //     setCharacters(data.results)
  //   })
  //   .catch((err)=>toast.error(err.response.data.error))
  //   .finally(()=> setIsLoading(false))
  // }, []);
  return (
    <div className="wrapper">
      <Toaster />
      <Navbar>
        <Search query={query} setQuery={setQuery}/>
        <SearchResults numOfResult={characters.length}/>
        </Navbar>
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
