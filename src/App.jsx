import Navbar, { Search, SearchResults } from "./components/Navbar";
import "./App.css";
import { useState } from "react";
import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";
import { Toaster, toast } from "react-hot-toast";
import Modal from "./components/Modal";

import useCharacters from "./hooks/useCharacters";
import AppProvider from "./providers/AppProvider";
const App = () => {
  const [query, setQuery] = useState("");
  const { isLoading, characters } = useCharacters(query);
  return (
    <AppProvider>
      <div className="wrapper">
        <Toaster />
        <Modal title="Favorite characters" />
        <Navbar>
          <Search query={query} setQuery={setQuery} />
          <SearchResults numOfResult={characters.length} />
        </Navbar>
        <Main>
          <CharacterList characters={characters} isLoading={isLoading} />
          <CharacterDetail />
        </Main>
      </div>
    </AppProvider>
  );
};

export default App;

function Main({ children }) {
  return <div className="main">{children}</div>;
}
