import movieStoreLogo from "../img/movie-store-logo.png";
import SearchBar from "./SearchBar";
import FavouritesMenuLockup from "./FavouritesMenuLockup";
import LoginMenuLockup from "./LoginMenuLockup";
import { FaShoppingCart } from "react-icons/fa";

function NavbarSearch(){
    return (
        <nav>
            <div className="navbar-row1-promo">
                <p>Free shipping on orders over £25</p>
            </div>
            <div className="navbar-row2">
                <img src={movieStoreLogo} alt="movie store logo"></img>
                <SearchBar />
                <FavouritesMenuLockup />
                <LoginMenuLockup />
                <FaShoppingCart className="shopping-cart" />
            </div>
            <div className="navbar-row3">
                <ul>
                    <li className="navbar-li">DVDs</li>
                    <li className="navbar-li">Inspiration</li>
                    <li className="navbar-li"> SALE</li>
                    <li className="navbar-li">Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavbarSearch;