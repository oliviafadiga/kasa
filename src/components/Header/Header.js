import Img from "../../images/KasaLogo.png";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <nav>
        <img className="header__logo" src={Img} alt="logo de Kasa"></img>

        <ul>
          <li>
            <Link to="/" className="items">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/about" className="items">
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
