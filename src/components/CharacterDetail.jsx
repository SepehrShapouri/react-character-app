import CharacterCard from "./CharacterCard";
import EpisodeList from "./EpisodeList";
import { character, episodes } from "../data/characters";
const CharacterDetail = ({selectedId,addToFavorite}) => {
  return (
    <div className="character-detail">
    <CharacterCard selectedId={selectedId} addToFavorite={addToFavorite}/>
    </div>
  );
};

export default CharacterDetail;
