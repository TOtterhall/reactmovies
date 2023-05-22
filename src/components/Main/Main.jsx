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
        <Route exact path="/" element={<MovieList />} />
        <Route exact path="/:id" element={<MovieDetails />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
