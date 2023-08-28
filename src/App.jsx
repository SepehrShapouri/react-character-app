import Navbar from "./components/Navbar";
import "./App.css"
import CharacterCard from "./components/CharacterCard";
import CharacterCardSum from "./components/CharacterCardSum";
import EpisodeList from "./components/EpisodeList";
import characters from "./data/characters";
const App = () => {
  return ( 
    <div className="wrapper">
      <Navbar/>
      <div className="main">
        <div className="character-summary_list">
          {characters.map((item)=>{
            return <CharacterCardSum item={item}/>
          })}
        </div>
      <div className="character-detail">
      <CharacterCard/>
      <EpisodeList/>
      </div>
      </div>
    </div>
   );
}
 
export default App;