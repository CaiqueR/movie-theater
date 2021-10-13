import styles from "./styles.module.css";

function MovieDetails({ data }) {
  return (
    <div
      className={styles.movie}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${data?.backdrop_path})`,
      }}
    >
      <div className={styles.duration}>
        <ul>
          {data?.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>

        <span>{data?.runtime} min</span>
      </div>
      <h1>{data?.title}</h1>
      <p>{data?.overview}</p>

      <ul className={styles.production}>
        {data?.production_companies.map((company) => (
          <li>{company.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieDetails;
