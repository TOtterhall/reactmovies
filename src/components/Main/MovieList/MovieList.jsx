import FilterDropdown from "./FilterDropdown/FilterDropdown";
import MovieCard from "./MovieCard/MovieCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${}`
      );
      const data = await res.json();
      setMovies(data.results);
    };
    fetchMovies();
  });

  return (
    <>
      <FilterDropdown />

      {movies.map((movie) => (
        <Link key={movie.id} to={`/${movie.id}`}>
          <MovieCard movie={movie} />
        </Link>
      ))}
    </>
  );
}
