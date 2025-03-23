import navbarLogo from "../../assets/UzumUz.svg";
import { TfiBag } from "react-icons/tfi";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import "./Navbar.css";
import { Link } from "react-router-dom";

const NavbarMiddle = () => {
  return (
    <div className="navbar-middle">
      <div className="container">
        <div className="navbar-middle-wrapper">
          <Link className="navbar-middle-logo-link" to={"/"}>
            <img className="navbar-middle-logo" src={navbarLogo} alt="" />
          </Link>

          <button className="navbar-middle-btn">
            <TfiBag />
            <span>Katalog</span>
          </button>

          <div className="navbar-middle-search">
            <input type="text" placeholder="search" />
            <button>
              <CiSearch />
            </button>
          </div>

          <ul className="navbar-middle-collection">
            <li>
              <Link to={"/login"}>
                <CiUser className="navbar-middle-collection-icon" />
                <span>Kirish</span>
              </Link>
            </li>

            <li>
              <Link to={"likes"}>
                <CiHeart className="navbar-middle-collection-icon" />
                <span>Saralangan</span>
              </Link>
            </li>

            <li>
              <Link to={"basket"}>
                <SlBasket className="navbar-middle-collection-icon" />
                <span>Savat</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarMiddle;
