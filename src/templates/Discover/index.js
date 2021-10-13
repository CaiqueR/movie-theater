import styles from "./styles.module.css";
import { useSearch } from "../../context/SearchContext";
import { useMemo } from "react";
import Router from "next/router";

function Discover({ data, title }) {
  const { search, results } = useSearch();

  const titleText = useMemo(() => {
    if (search) {
      return `Searching for ${search}`;
    }
    return title;
  }, [search]);

  const movies = useMemo(() => {
    if (search) {
      return results;
    }
    return data;
  }, [data, results, search]);

  function handleMovieClick(movieId) {
    Router.push(`/movie/${movieId}`);
  }

  return (
    <div className={styles.discover}>
      <h1>{titleText}</h1>
      <ul className={styles["movie-list"]}>
        {movies.results?.map((movie) => {
          return (
            <li key={movie.id} className={styles.movie}>
              <div
                className={styles["movie-image-wrapper"]}
                onClick={() => handleMovieClick(movie.id)}
              >
                <img
                  className={styles["movie-image"]}
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt="None"
                />
                <p>{movie.overview}</p>
              </div>

              <span className={styles["movie-title"]}>
                {movie.original_title}
              </span>
              <div className={styles["movie-section"]}>
                <span>{new Date(movie.release_date).getFullYear()}</span>
                <span className={styles["movie-popularity"]}>
                  Popularity: {movie.popularity}
                </span>
              </div>
              <div className={styles["movie-details"]}>
                <span>&#11088;</span>{" "}
                <span>
                  {movie.vote_average} {"("}
                  {movie.vote_count}
                  {")"}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Discover;
