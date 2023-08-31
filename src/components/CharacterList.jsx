import { useState } from "react";
import CharacterCardSum from "./CharacterCardSum";
const CharacterList = ({characters}) => {
    return ( 
        <div className="character-summary_list">
        {characters.map((item)=>{
          return <CharacterCardSum key={item.id} item={item}/>
        })}
      </div>
     );
}
 
export default CharacterList;