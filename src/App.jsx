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
import useCharacters from "./hooks/useCharacters";
import useLocalStorage from "./hooks/useLocalStorage";
const App = () => {
  const [selectedId, setSelectedId] = useState();
  const [query, setQuery] = useState("");
  const { isLoading, characters } = useCharacters(query);
  const [open, setOpen] = useState(false);
  const [favorites, setFavorites] = useLocalStorage("FAVORITES",[]);
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
