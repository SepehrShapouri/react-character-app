import { useEffect, useState } from "react";
import CircularIndeterminate from "./Loader";
import EpisodeList from "./EpisodeList";
import axios from "axios";
const CharacterCard = ({ selectedId, addToFavorite, isAddedToFavorite }) => {
  const [activeCharacter, setActiveCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchSingleCharacter() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/${selectedId}`
        );
        setActiveCharacter(data);
        const episodeId = data.episode.map((e) => e.split("/").at(-1));
        const { data: episodeData } = await axios.get(
          `https://rickandmortyapi.com/api/episode/${episodeId}`
        );
        setEpisodes([episodeData].flat());
        console.log(episodes);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    if (selectedId) fetchSingleCharacter();
    if (!selectedId) setActiveCharacter(null);
  }, [selectedId]);

  if (!activeCharacter)
    return (
      <div
        style={{
          color: "var(--text-color)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        please select a character
      </div>
    );
  if (isLoading)
    return (
      <div className="loader">
        <CircularIndeterminate />
      </div>
    );
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
              {activeCharacter.gender == "Male" ? "🙎🏽‍♂️" : "🙎🏻‍♀️"}&nbsp;
              {activeCharacter.name}
            </h3>
            <span className="character-detail__status">
              <Status character={activeCharacter} />
              <p className="character-type">{activeCharacter.species}</p>
            </span>
          </header>
          <footer className="character-card__detail-footer">
            <aside className="character-lastknown">
              <p>Last Known Location : </p>
              <h4>{activeCharacter.location.name}</h4>
            </aside>
          </footer>
          {isAddedToFavorite ? (
            <AddedToFavorite />
          ) : (
            <DisplayBtn
              activeCharacter={activeCharacter}
              addToFavorite={addToFavorite}
            />
          )}
        </div>
      </div>
      <EpisodeList episodes={episodes} isLoading={isLoading} />
    </>
  );
};

export default CharacterCard;

function DisplayBtn({ activeCharacter, addToFavorite }) {
  return (
    <button
      onClick={() => addToFavorite(activeCharacter.id)}
      className="main-btn"
    >
      Add to Favorite
    </button>
  );
}
function AddedToFavorite() {
  return <p className="added">Already added to favorite!</p>;
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
