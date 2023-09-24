import CharacterCard from "./CharacterCard";
import EpisodeList from "./EpisodeList";
import { character, episodes } from "../data/characters";
const CharacterDetail = ({selectedId,addToFavorite,isAddedToFavorite}) => {
  return (
    <div className="character-detail">
    <CharacterCard isAddedToFavorite={isAddedToFavorite} selectedId={selectedId} addToFavorite={addToFavorite}/>
    </div>
  );
};

export default CharacterDetail;
