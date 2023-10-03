import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import Episode from "./Episode";
import { useState } from "react";
const EpisodeList = ({ episodes, isLoading }) => {
  const [sortBy, setSortBy] = useState(true);
  let sortedEpisodes;
  if (sortBy) {
    sortedEpisodes = [...episodes].sort(
      (a, b) => new Date(a.created) - new Date(b.created)
    );
  } else {
    sortedEpisodes = [...episodes].sort(
      (a, b) => new Date(b.created) - new Date(a.created)
    );
  }
  if (isLoading) return <div>still loading</div>;
  return (
    <div className="episode-list__component">
      <div className="list-title">
        <p>List Of Episodes</p>
        <span className="episode-sort" onClick={() => setSortBy((is) => !is)}>
          <ArrowDownCircleIcon
            className="episode-sort__icon"
            style={{
              rotate: sortBy ? "0deg" : "180deg",
              transition: "all 0.2s ease",
            }}
          />
        </span>
      </div>
      <ul className="episode-list">
        {sortedEpisodes.map((item, index) => (
          <Episode episode={item} key={item.id} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default EpisodeList;
