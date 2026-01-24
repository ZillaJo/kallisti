import "./Navbar.scss"
import { FiMenu } from "react-icons/fi";
// import img8 from "../assets/images/img8.png"

function Navbar() {
  return (
    <div className="navbar">
      <div className="laptop">
        <h1 className="logo">
          Kallisti
        </h1>
        <div className="navigation">
          <ul className="links-conteneur ">
            <li className="link">Acceuil</li>
            <li className="link">Nos valeurs</li>
            <li className="link">Nos realisation</li>
            <li className="link">Contact</li>
            {/* <li className="link"></li> */}
          </ul>
          <FiMenu  className="menu-icon"/>
        </div>
      </div>
      <div className="mobile"></div>

    </div>
  );
}

export default Navbar;
