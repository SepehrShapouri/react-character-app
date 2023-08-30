import {EyeIcon} from "@heroicons/react/24/outline"

const CharacterCardSum = ({item}) => {
  console.log(item)
    return ( 
        <div className="character-card-sum">
            <img src={item.image} alt="" className="character-sum__image" />
            <div className="character-sum__detail">
                <h4>{item.gender == "Male" ? "🙎🏽‍♂️" : "🙎🏻‍♀️"}&nbsp;{item.name}</h4>
                <span className="character-detail__status">
            <span className={`life-status ${item.status === "Alive" ? "alive" : "dead"}`}></span>{item.status}&nbsp; - &nbsp;
            <p className="character-type">{item.species}</p>
          </span>
            </div>
          <EyeIcon className="eye"/>
        </div>
     );
}
 
export default CharacterCardSum;