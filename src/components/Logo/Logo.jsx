import { FcFilmReel } from "react-icons/fc";
import { IconContext } from "react-icons";
import css from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={css.logo}>
      <div>
        <IconContext.Provider value={{ size: 50 }}>
          <FcFilmReel />
        </IconContext.Provider>
      </div>
      <p className={css.text}>MultiKino</p>
    </div>
  );
}
