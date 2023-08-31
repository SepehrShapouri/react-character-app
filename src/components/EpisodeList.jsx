import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import Episode from "./Episode";
const EpisodeList = ({ episodes }) => {
  return (
    <div className="episode-list__component">
      <div className="list-title">
        <p>List Of Episodes</p>
        <span className="episode-sort">
          <ArrowDownCircleIcon className="episode-sort__icon" />
        </span>
      </div>
      <ul className="episode-list">
        {episodes.map((item,index) => (
          <Episode episode={item} key={item.id} index={index}/>
        ))}
      </ul>
    </div>
  );
};

export default EpisodeList;
