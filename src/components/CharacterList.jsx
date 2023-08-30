import CharacterCardSum from "./CharacterCardSum";
const CharacterList = ({allCharacters}) => {
    return ( 
        <div className="character-summary_list">
        {allCharacters.map((item)=>{
          return <CharacterCardSum key={item.id} item={item}/>
        })}
      </div>
     );
}
 
export default CharacterList;