import { SearchProvider } from "../context/SearchContext";
import Discover from "../templates/Discover";
import SearchBar from "../templates/SearchBar";
import api from "../utils/api";

export default function Home(props) {
  return (
    <SearchProvider>
      <SearchBar {...props} />
      <Discover title="Top popular" {...props} />
    </SearchProvider>
  );
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
