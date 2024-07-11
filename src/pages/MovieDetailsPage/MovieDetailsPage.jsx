import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../../API/getFilms";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import MovieDetailes from "../../components/MovieDetailes/MovieDetailes";

export default function MovieDetailsPage() {
  const { movieId } = useParams;
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovie() {
      try {
        setLoading(true);
        setError(false);

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
      {loading && <Loader />}
      {error && <Error />}
      {movie && <MovieDetailes />}
    </>
  );
}
