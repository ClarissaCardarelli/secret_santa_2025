import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav style={{ height: "80px", backgroundColor: "white", width: "100%" }}>
        <ul>
          <li>
            <Link to="/">Mot Mystère</Link>
          </li>
          <li>
            <Link to="/scores">Scoreboard Link</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
