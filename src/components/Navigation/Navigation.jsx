import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import clsx from "clsx";
import css from "./Navigation.module.css";

export default function Navigation() {
  const isActive = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive);
  };

  return (
    <header className={css.header}>
      <nav>
        <ul className={css.list}>
          <li>
            <NavLink to="/" className={isActive}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={isActive}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
      <Logo />
    </header>
  );
}
