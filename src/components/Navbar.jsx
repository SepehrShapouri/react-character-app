import {HeartIcon} from "@heroicons/react/24/outline"
const Navbar = ({numOfResult}) => {
    return ( 
        <header className="app-header">
            <aside className="app-header__logo">Rick and Morty!</aside>
            <input type="search" placeholder="Search for..."  className="app-header__search" />
            <p className="app-header__found-result">Found {numOfResult} Results</p>
            <span className="app-header__favourites">
            <HeartIcon className="app-header__favourites-icon"/>
            <span className="app-header__favourites-count">2</span>
            </span>
        </header>
     );
}
 
export default Navbar;