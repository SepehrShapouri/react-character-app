import Navbar from "./components/Navbar";
import "./App.css";
import CharacterCard from "./components/CharacterCard";
import CharacterCardSum from "./components/CharacterCardSum";
import EpisodeList from "./components/EpisodeList";
import { character, episodes, allCharacters } from "./data/characters";
import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";
const App = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="main">
        <CharacterList allCharacters={allCharacters} />
        <CharacterDetail />
      </div>
    </div>
  );
};

export default App;
