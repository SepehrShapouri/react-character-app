
const CharacterCard = ({character}) => {
  return (
    <div className="character-card">
      <img
        src="src/images/Rick_Sanchez.webp"
        alt=""
        className="character-card__image"
      />
      <div className="character-card__detail">
        <header className="character-card__detail-header">
          <h3 className="detail-header__title">{character.gender =="Male" ? "🙎🏽‍♂️" : "🙎🏻‍♀️"}&nbsp;{character.name}</h3>
          <span className="character-detail__status">
          <span className={`life-status ${character.status === "Alive" ? "alive" : "dead"}`}></span>{character.status}&nbsp; - &nbsp;
            <p className="character-type">{character.species}</p>
          </span>
        </header>
        <footer className="character-card__detail-footer">
          <aside className="character-lastknown">
            <p>Last Known Location : </p>
            <h4>{character.location.name}</h4>
          </aside>
        </footer>
        <button className="main-btn">Add to Favorite</button>
      </div>
    </div>
  );
};

export default CharacterCard;
