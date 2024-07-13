import { IconContext } from "react-icons";
import { MdOutlineNoPhotography } from "react-icons/md";
import css from "./MovieInfo.module.css";

export default function MovieInfo({
  movie: {
    backdrop_path,
    original_title,
    title,
    release_date,
    origin_country,
    vote_average,
    overview,
  },
}) {
  return (
    <div className={css.wrapper}>
      <div>
        {backdrop_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
            alt={title}
            className={css.img}
          />
        ) : (
          <IconContext.Provider value={{ size: 200 }}>
            <MdOutlineNoPhotography />
          </IconContext.Provider>
        )}
      </div>
      <div>
        <h2 className={css.title}>{original_title}</h2>
        <p className={css.overview}>{overview}</p>
        <div className={css.date}>
          <p>{release_date} </p> <span>{origin_country}</span>
        </div>
        <div className={css.date}>
          <p>User score: </p> <span>{vote_average}%</span>
        </div>
      </div>
    </div>
  );
}
