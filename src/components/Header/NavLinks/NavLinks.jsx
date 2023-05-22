import "./NavLinks.css";
import { NavLink } from "react-router-dom";

export default function NavLinks() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>

          <li>
            <NavLink to="/">MovieList</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
