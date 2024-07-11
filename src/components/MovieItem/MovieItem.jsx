import css from "./MovieItem.module.css";
import { Link } from "react-router-dom";

export default function MovieItem({ data: { id, title, backdrop_path } }) {
  return (
    <Link to={`/movies/${id}`}>
      <div className={css.card}>
        <h2 className={css.title}>{title}</h2>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
            alt={backdrop_path}
          />
        </div>
      </div>
    </Link>
  );
}
