import './Header.scss';
import logo from "../../assets/images/BrainFlix-logo.svg";
import mohan from "../../assets/images/Mohan-muruge.jpg";
import search from "../../assets/images/search.svg";
import upload from "../../assets/images/upload.svg";
import {Link} from "react-router-dom";



function Header() {
    return (
        <div className="header">
            <Link to="/"><img className="header__logo" src={logo} /> </Link>
            <div className="header__content">
                <div className="header__search">
                    <img className="header__search--icon" src={search} alt="search icon" />
                    <input className="header__search--input" type="text" placeholder="Search" />
                </div>
                <Link to="/upload" className="header__upload">
                        <img className="header__upload--icon" src={upload} alt="upload button" />
                        <h3 className="header__upload--text">UPLOAD</h3>
                </Link>
                <img className="header__profile--picture" src={mohan} alt="profile pic" />
            </div>
        </div>
    )
}


export default Header;