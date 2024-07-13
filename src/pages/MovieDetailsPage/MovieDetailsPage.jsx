import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getMovie } from "../../API/getFilms";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import MovieDetailes from "../../components/MovieDetailes/MovieDetailes";
import { FaArrowRotateLeft } from "react-icons/fa6";
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const location = useLocation();
  const backLinkLocation = location.state ?? "/movies";

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovie() {
      setLoading(true);
      setError(false);
      try {
        const data = await getMovie(movieId);

        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, [movieId]);

  return (
    <>
      <Link to={backLinkLocation}>
        <div className={css.goBack}>
          <FaArrowRotateLeft />
          <p>Go back</p>
        </div>
      </Link>
      {loading && <Loader />}
      {error && <Error />}
      {movie && <MovieDetailes movie={movie} />}
    </>
  );
}
