import styles from "./styles.module.css";

function Discover({ data }) {
  console.log("data :>> ", data);
  return (
    <div className={styles.discover}>
      <h1>Top popular</h1>
      <ul className={styles["movie-list"]}>
        {data.results.map((movie) => {
          return (
            <li key={movie.original_title} className={styles.movie}>
              <img
                className={styles["movie-image"]}
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt="None"
              />
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
