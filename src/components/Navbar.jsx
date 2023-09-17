import { HeartIcon } from "@heroicons/react/24/outline";
import { Children } from "react";
const Navbar = ({children}) => {
  return (
    <header className="app-header">
      <aside className="app-header__logo">Rick and Morty!</aside>
      {children}
      <span className="app-header__favourites">
        <HeartIcon className="app-header__favourites-icon" />
        <span className="app-header__favourites-count">2</span>
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
