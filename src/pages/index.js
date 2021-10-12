import Discover from "../templates/Discover";
import api from "../utils/api";

export default function Home(props) {
  return <Discover {...props} />;
}

export async function getStaticProps() {
  const data = await api("/discover/movie", { sort_by: "popularity.desc" });

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
