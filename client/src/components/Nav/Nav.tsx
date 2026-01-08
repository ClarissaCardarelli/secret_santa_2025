import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/" className="nav-link title">
              <img src="/holly.png" alt="" className="holly" />
              Mot Mystère
            </Link>
          </li>
          <li>
            <Link to="/scores" className="nav-link">
              Classement
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
