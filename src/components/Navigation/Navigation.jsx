import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
import Logo from "../Logo/Logo";

export default function Navigation() {
  const liniIsActive = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive);
  };
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/" className={liniIsActive}>
          Home
        </NavLink>
        <NavLink to="/movies" className={liniIsActive}>
          Movies
        </NavLink>
      </nav>
      <Logo />
    </header>
  );
}
