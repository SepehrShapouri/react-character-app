const CharacterCard = () => {
  return (
    <div className="character-card">
      <img
        src="src/images/Rick_Sanchez.webp"
        alt=""
        className="character-card__image"
      />
      <div className="character-card__detail">
        <header className="character-card__detail-header">
          <h3 className="detail-header__title">Rick Sanchez</h3>
          <span className="character-detail__status">
            <span className="life-status"></span>Dead&nbsp; - &nbsp;
            <p className="character-type">Human</p>
          </span>
        </header>
        <footer className="character-card__detail-footer">
          <aside className="character-lastknown">
            <p>Last Known Location : </p>
            <h4>Citadel of Ricks</h4>
          </aside>
        </footer>
        <button className="main-btn">Add to Favorite</button>
      </div>
    </div>
  );
};

export default CharacterCard;
