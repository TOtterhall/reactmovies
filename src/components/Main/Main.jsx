import About from "./About/About";
import Contact from "./Contact/Contact";
import MovieDetails from "./MovieDetails/MovieDetails";
import MovieList from "./MovieList/MovieList";
import { Route, Routes } from "react-router-dom";

export default function Main() {
  return (
    <>
      <h1>Main</h1>

      <Routes>
        <Route exact path="/MovieList" element={<MovieList />} />
        <Route exact path="/MovieDetails" element={<MovieDetails />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}
