import MovieItem from "../MovieItem/MovieItem";
import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
  return (
    <ul className={css.list}>
      {movies.map((movie, index) => (
        <li key={index}>
          <MovieItem data={movie} />
        </li>
      ))}
    </ul>
  );
}
