/* eslint-disable react/prop-types */
import Button from "../../../Buttons/Buttons";
import "./MovieCard.css";

export default function MovieCard({ movie }) {
  return (
    <div className="movie_card">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt=""
      />
      <div className="movie_card_info">
        <h4>{movie.original_title}</h4>
        <p>{movie.vote_average}</p>
        <Button />
      </div>
    </div>
  );
}
