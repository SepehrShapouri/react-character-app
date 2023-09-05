import { useState } from "react";
import CharacterCardSum from "./CharacterCardSum";
import CircularIndeterminate from "./Loader";
const CharacterList = ({characters,isLoading,onShowCharacter}) => {
  if(isLoading) return <div className="loader"><CircularIndeterminate/></div>
    return ( 
        <div className="character-summary_list">
        {characters.map((item)=>{
          return <CharacterCardSum onShowCharacter={onShowCharacter} key={item.id} item={item}/>
        })}
      </div>
     );
}
 
export default CharacterList;