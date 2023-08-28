import Navbar from "./components/Navbar";
import "./App.css"
import CharacterCard from "./components/CharacterCard";
import CharacterCardSum from "./components/CharacterCardSum";
import EpisodeList from "./components/EpisodeList";
const App = () => {
  return ( 
    <div className="wrapper">
      <Navbar/>
      <div className="main">
        <div className="character-summary_list">
          <CharacterCardSum/>
          <CharacterCardSum/>
        </div>
        <CharacterCard/>
      </div>
      <EpisodeList/>
    </div>
   );
}
 
export default App;