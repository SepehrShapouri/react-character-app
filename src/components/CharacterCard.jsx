import { useEffect, useId, useState } from "react";
import CircularIndeterminate from "./Loader";
import EpisodeList from "./EpisodeList";
import axios from "axios";
import { useSelectedId } from "../context/SelectedIdContext";
import { useFavorites } from "../context/FavoritesContext";
const CharacterCard = () => {
  const { favorites } = useFavorites();
  const { selectedId } = useSelectedId();
  const [activeCharacter, setActiveCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const isAddedToFavorite = favorites.map((fav) => fav.id).includes(selectedId);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function fetchSingleCharacter() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/${selectedId}`,
          { signal }
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
    return () => {
      controller.abort();
    };
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
            <DisplayBtn activeCharacter={activeCharacter} />
          )}
        </div>
      </div>
      <EpisodeList episodes={episodes} isLoading={isLoading} />
    </>
  );
};

export default CharacterCard;

function DisplayBtn({ activeCharacter }) {
  const { setFavorites } = useFavorites();
  const addToFavorite = (id) => {
    const favoriteCharacter = characters.find((f) => f.id === id);
    setFavorites((prev) => [...prev, favoriteCharacter]);
  };
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
