import MovieDetails from "../../templates/MovieDetails";
import api from "../../utils/api";

export default function Home(props) {
  return <MovieDetails {...props} />;
}

export async function getStaticPaths() {
  const data = await api("/discover/movie", { sort_by: "popularity.desc" });

  const paths = data.results.map((movie) => ({
    params: { id: movie.id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const movieId = params.id;
  const data = await api(`/movie/${movieId}`);

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { data },
    revalidate: 60,
  };
}
