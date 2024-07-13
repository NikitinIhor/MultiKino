import { NavLink, Outlet } from "react-router-dom";
import MovieInfo from "../MovieInfo/MovieInfo";
import clsx from "clsx";
import css from "./MovieDetailes.module.css";

export default function MovieDetailes({ movie }) {
  const isActive = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive);
  };

  return (
    <>
      <MovieInfo movie={movie} />
      <ul className={css.list}>
        <li>
          <NavLink className={isActive} to="cast">
            Cast
          </NavLink>
        </li>
        |
        <li>
          <NavLink className={isActive} to="reviews">
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
