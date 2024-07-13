import { useEffect, useState } from "react";
import { getMovieReviews } from "../../API/getFilms";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchReviews() {
      setLoading(true);
      setError(false);
      try {
        const data = await getMovieReviews(movieId);

        setReviews(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchReviews();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && <p>Something went wrong, please reload the page</p>}
      {reviews.length > 0 ? (
        <ul className={css.list}>
          {reviews.map(({ id, author, content, created_at }) => (
            <li className={css.item} key={id}>
              <p className={css.name}>{author}</p>
              <p className={css.date}>{created_at}</p>
              <p className={css.text}>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.error}>Sorry, there are no reviews...</p>
      )}
    </>
  );
}
