import { HeartIcon } from "@heroicons/react/24/outline";
import { useOpen } from "../context/OpenContext";
import { useFavorites } from "../context/FavoritesContext";
const Navbar = ({children}) => {
  const {favorites} = useFavorites()
  const {setOpen} = useOpen()
  return (
    <header className="app-header">
      <aside className="app-header__logo">Rick and Morty!</aside>
      {children}
      <span className="app-header__favourites">
        <HeartIcon className="app-header__favourites-icon" onClick={()=>setOpen(is=>!is)}/>
        <span className="app-header__favourites-count">{favorites.length}</span>
      </span>
    </header>
  );
};

export default Navbar;
export const Search = ({ query, setQuery }) => {
  return (
    <input
      type="search"
      placeholder="Search for..."
      value={query}
      className="app-header__search"
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};
export const SearchResults = ({ numOfResult }) => {
  return (
    <p className="app-header__found-result">Found {numOfResult} Results</p>
  );
};
