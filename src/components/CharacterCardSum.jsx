import {EyeIcon} from "@heroicons/react/24/outline"

const CharacterCardSum = () => {
    return ( 
        <div className="character-card-sum">
            <img src="src/images/Rick_Sanchez.webp" alt="" className="character-sum__image" />
            <div className="character-sum__detail">
                <h4>Rick Sanchez</h4>
                <span className="character-detail__status">
            <span className="life-status"></span>Dead&nbsp; - &nbsp;
            <p className="character-type">Human</p>
          </span>
            </div>
          <EyeIcon className="eye"/>
        </div>
     );
}
 
export default CharacterCardSum;