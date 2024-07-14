import { useEffect, useState } from "react";
import { getMovies } from "../../API/getFilms";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";
import Error from "../../components/Error/Error";
import AddNewPagesBtn from "../../components/AddNewPages/AddNewPages";
import css from "./HomePage.module.css";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, SetError] = useState(false);
  const [loading, SetLoading] = useState(false);
  const [page, setPage] = useState(1);

  const addPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    async function fetchData() {
      SetLoading(true);
      SetError(false);
      try {
        const data = await getMovies(page);

        setMovies((prevMovies) => {
          return [...prevMovies, ...data.results];
        });
      } catch (error) {
        console.log(`Error getMovies(page) : ${error}`);
        SetError(true);
      } finally {
        SetLoading(false);
      }
    }
    fetchData();
  }, [page]);

  return (
    <>
      <h1 className={css.title}>-- Trending today --</h1>;
      {movies.length > 0 && <MovieList movies={movies} />}
      {loading && <Loader />}
      {error && <Error />}
      {movies.length > 0 && <AddNewPagesBtn addPage={addPage} />}
    </>
  );
}
