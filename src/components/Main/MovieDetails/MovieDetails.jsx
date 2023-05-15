import Button from "../../Buttons/Buttons";
import { Link } from "react-router-dom";

export default function MovieDetails() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/MovieDetails">MovieDetails</Link>
          </li>
          <li>
            <Button />
          </li>
        </ul>
      </nav>
    </>
  );
}
