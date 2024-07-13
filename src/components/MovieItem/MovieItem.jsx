import { Link, useLocation } from "react-router-dom";
import { MdOutlineNoPhotography } from "react-icons/md";
import { IconContext } from "react-icons";
import css from "./MovieItem.module.css";

export default function MovieItem({ data: { id, title, backdrop_path } }) {
  const location = useLocation();

  return (
    <Link to={`/movies/${id}`} state={location}>
      <div className={css.card}>
        <h2 className={css.title}>{title}</h2>
        <div>
          {backdrop_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
              alt={backdrop_path}
            />
          ) : (
            <IconContext.Provider value={{ size: 170 }}>
              <MdOutlineNoPhotography />
            </IconContext.Provider>
          )}
        </div>
      </div>
    </Link>
  );
}
