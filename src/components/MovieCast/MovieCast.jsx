import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieAuthor } from "../../API/getFilms";
import { MdOutlineNoPhotography } from "react-icons/md";
import { IconContext } from "react-icons";
import Loader from "../Loader/Loader";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchCredits() {
      setLoading(true);
      setError(false);
      try {
        const data = await getMovieAuthor(movieId);
        setCasts(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchCredits();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && <p>Something went wrong, please reload the page</p>}
      <ul className={css.list}>
        {casts.map(({ id, original_name, profile_path, name, character }) => (
          <li className={css.item} key={id}>
            <div className={css.image}>
              {profile_path !== null ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                  alt={name}
                />
              ) : (
                <IconContext.Provider value={{ size: 150 }}>
                  <MdOutlineNoPhotography />
                </IconContext.Provider>
              )}
            </div>
            <div className={css.info}>
              <p className={css.name}>{original_name}</p>
              <p>
                as - <span className={css.character}>{character}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
