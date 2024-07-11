import css from "./Error.module.css";
import { FaRegSadTear } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Error() {
  return (
    <div className={css.error}>
      <IconContext.Provider value={{ size: 50, color: "rgb(252, 91, 91)" }}>
        {" "}
        <FaRegSadTear />{" "}
      </IconContext.Provider>
      <p className={css.text}>
        Ooops... something went wrong, please, reload the page
      </p>
      ;
    </div>
  );
}
