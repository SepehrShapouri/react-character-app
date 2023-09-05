import CharacterCard from "./CharacterCard";
import EpisodeList from "./EpisodeList";
import { character, episodes } from "../data/characters";
const CharacterDetail = ({character}) => {
  console.log(character)
  return (
    <div className="character-detail">
    <CharacterCard character={character}/>
    <EpisodeList episodes={episodes}/>
    </div>
  );
};

export default CharacterDetail;
