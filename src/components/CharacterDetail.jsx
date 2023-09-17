import CharacterCard from "./CharacterCard";
import EpisodeList from "./EpisodeList";
import { character, episodes } from "../data/characters";
const CharacterDetail = ({selectedId}) => {
  return (
    <div className="character-detail">
    <CharacterCard selectedId={selectedId}/>
    </div>
  );
};

export default CharacterDetail;
