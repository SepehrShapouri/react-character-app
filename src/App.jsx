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
  const [selectedId, setSelectedId] = useState();
  const [favorites, setFavorites] = useState([]);
  const [query, setQuery] = useState("");
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
    if (query.length < 3) {
      setCharacters([]);
      return;
    }
    fetchData();
  }, [query]);
  const onShowCharacter = (id) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };
  const addToFavorite = (id) => {
    const favoriteCharacter = characters.find((f) => f.id === id);
    setFavorites((prev) => [...prev, favoriteCharacter]);
  };
  const isAddedToFavorite = favorites.map((fav) => fav.id).includes(selectedId);
  console.log(isAddedToFavorite);
  return (
    <div className="wrapper">
      <Toaster />
      <Navbar favorites={favorites}>
        <Search query={query} setQuery={setQuery} />
        <SearchResults numOfResult={characters.length} />
      </Navbar>
      <Main>
        <CharacterList
          selectedId={selectedId}
          onShowCharacter={onShowCharacter}
          characters={characters}
          isLoading={isLoading}
        />
        <CharacterDetail
          selectedId={selectedId}
          addToFavorite={addToFavorite}
          isAddedToFavorite={isAddedToFavorite}
        />
      </Main>
    </div>
  );
};

export default App;

function Main({ children }) {
  return <div className="main">{children}</div>;
}
