import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { searchMovies } from "../../API/getFilms";
import SearchMovie from "../../components/SearchMovie/SearchMovie";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  // const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams("");

  const onSubmit = (film) => {
    setSearchParams({ query: film.text });
  };

  useEffect(() => {
    const query = searchParams.get("query");
    if (!query) return;
    async function fetchMovies() {
      setLoading(true);
      setError(false);

      try {
        const data = await searchMovies(query);
        if (data.results.length === 0) {
          toast("No movies found");
        } else {
          setMovies(data.results);
        }
      } catch (error) {
        setError(true);
        toast(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, [searchParams]);

  return (
    <div>
      <SearchMovie onSubmit={onSubmit} />
      {loading && <Loader />}
      {error && <Error />}
      {movies.length === 0 ? (
        <Toaster
          toastOptions={{
            position: "top-right",
            style: {
              border: "1px solid black",
              padding: "16px 24px",
              color: "#713200",
              backgroundColor: "rgb(248, 196, 196)",
              fontSize: 30,
            },
          }}
        />
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
}
