import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import Episode from "./Episode";
const EpisodeList = () => {
  return (
    <div className="episode-list__component">
      <div className="list-title">
        <p>List Of Episodes</p>
        <span className="episode-sort">
          <ArrowDownCircleIcon className="episode-sort__icon" />
        </span>
      </div>
      <div className="episode-list">
        <Episode />
      </div>
    </div>
  );
};

export default EpisodeList;
