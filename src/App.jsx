import Navbar, { Search, SearchResults } from "./components/Navbar";
import "./App.css";
import { useEffect, useState } from "react";
import { character, episodes, allCharacters } from "./data/characters";
import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";
import CircularIndeterminate from "./components/Loader";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import Modal from "./components/Modal";
import favoriteCharacter from "./components/FavoriteCharacter";
import FavoriteCharacter from "./components/FavoriteCharacter";
const App = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [favorites, setFavorites] = useState(
    () => JSON.parse(localStorage.getItem("FAVORITES")) || []
  );
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
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
  const onDeleteFavorite = (id) => {
    setFavorites((prev) => prev.filter((f) => f.id != id));
  };
  const isAddedToFavorite = favorites.map((fav) => fav.id).includes(selectedId);

  useEffect(() => {
    localStorage.setItem("FAVORITES", JSON.stringify(favorites));
  }, [favorites]);
  return (
    <div className="wrapper">
      <Toaster />
      <Modal title="Favorite characters" open={open} setOpen={setOpen}>
        {favorites.map((item) => (
          <FavoriteCharacter onDeleteFavorite={onDeleteFavorite} item={item} />
        ))}
      </Modal>
      <Navbar favorites={favorites} setOpen={setOpen}>
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
