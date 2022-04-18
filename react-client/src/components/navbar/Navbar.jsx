import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faBell,
    faMessage,
} from '@fortawesome/free-solid-svg-icons';
export default function Navbar() {
    return (
        <div className="navbar-container">
            <div className="logo-container">Food Social</div>
            <div className="search-container">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input></input>
            </div>
            <div className="navbar-links-container">
                <FontAwesomeIcon icon={faBell} />
                <FontAwesomeIcon icon={faMessage} />
                <img
                    src="/assets/profilePic/pic1.jpeg"
                    alt="profile"
                    className="navbar-profile-pic"
                />
            </div>
        </div>
    );
}
