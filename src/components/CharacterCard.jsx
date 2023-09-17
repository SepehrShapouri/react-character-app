import { useEffect, useState } from "react";
import { character,episodes } from "../data/characters";
import EpisodeList from "./EpisodeList";
import axios from "axios";
const CharacterCard = ({ selectedId,addToFavorite}) => {
  const [activeCharacter,setActiveCharacter] = useState(null)
  useEffect(()=>{
    async function fetchSingleCharacter(){
      try {
        const {data} = await axios.get(`https://rickandmortyapi.com/api/character/${selectedId}`)
        setActiveCharacter(data)
      } catch (error) {
        console.log(error)
      }
    }
    if(selectedId) fetchSingleCharacter()
    if(!selectedId) setActiveCharacter(null)
  },[selectedId])

  if(!activeCharacter) return <div style={{color:"var(--text-color)"}}>please select a character</div>
  return (
    <>
    <div className="character-card">
      <img
        src={activeCharacter.image}
        alt=""
        className="character-card__image"
      />
      <div className="character-card__detail">
        <header className="character-card__detail-header">
          <h3 className="detail-header__title">
            {activeCharacter.gender == "Male" ? "🙎🏽‍♂️" : "🙎🏻‍♀️"}&nbsp;{activeCharacter.name}
          </h3>
          <span className="character-detail__status">
            <Status character={activeCharacter}/>
            <p className="character-type">{activeCharacter.species}</p>
          </span>
        </header>
        <footer className="character-card__detail-footer">
          <aside className="character-lastknown">
            <p>Last Known Location : </p>
            <h4>{activeCharacter.location.name}</h4>
          </aside>
        </footer>
        <DisplayBtn activeCharacter={activeCharacter} addToFavorite={addToFavorite}/>
      </div>
    </div>
     <EpisodeList episodes={episodes}/>
     </>
  );
};

export default CharacterCard;

function DisplayBtn({activeCharacter,addToFavorite}) {
  return <button onClick={()=>addToFavorite(activeCharacter.id)} className="main-btn">Add to Favorite</button>;
}

export function Status({ character }) {
  return (
    <>
      {" "}
      <span
        className={`life-status ${
          character.status === "Alive" ? "alive" : "dead"
        }`}
      ></span>
      {character.status}&nbsp; - &nbsp;
    </>
  );
}
