import "./NavLinks.css";
import { Link } from "react-router-dom";

export default function NavLinks() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>

          <li>
            <Link to="/MovieList">MovieList</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
