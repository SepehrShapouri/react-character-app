const Episode = ({episode,index}) => {
  return (
    <li className="episode">
      <p className="episode-detail">
        {(String(index + 1).padStart(2,"0"))} {episode.episode} : <strong>{episode.name}</strong>
      </p>
      <aside className="episode-date">{episode.air_date}</aside>
    </li>
  );
};

export default Episode;
