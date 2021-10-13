import { useCallback, useMemo, useState } from "react";
import { StarRating } from "../../components/StarRating";
import { useSearch } from "../../context/SearchContext";
import api from "../../utils/api";
import styles from "./styles.module.css";

function SearchBar({ data }) {
  const { search, setSearch, setResults, rating, setRating } = useSearch();
  const [searchInput, setSearchInput] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setSearch(event.target.search.value);
    const response = await api("/search/movie", {
      query: event.target.search.value,
    });

    // const responseFiltered = {
    //   ...response,
    //   results: response.results.filter((result) => {
    //     if (rating === 0) {
    //       return true;
    //     }
    //     const max = rating * 2;
    //     const min = max - 2;
    //     return result.vote_average >= min && result.vote_average <= max;
    //   }),
    // };

    setResults(response);
  }

  function handleClear() {
    setResults([]);
    setSearch("");
    setSearchInput("");
  }

  return (
    <div className={styles.search}>
      <form onSubmit={handleSubmit}>
        <div className={styles["form-input"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.6002 12.0498C9.49758 12.8568 8.13777 13.3333 6.66667 13.3333C2.98477 13.3333 0 10.3486 0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3486 0 13.3333 2.98477 13.3333 6.66667C13.3333 8.15637 12.8447 9.53194 12.019 10.6419C12.0265 10.6489 12.0338 10.656 12.0411 10.6633L15.2935 13.9157C15.6841 14.3063 15.6841 14.9394 15.2935 15.33C14.903 15.7205 14.2699 15.7205 13.8793 15.33L10.6269 12.0775C10.6178 12.0684 10.6089 12.0592 10.6002 12.0498ZM11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"
            ></path>
          </svg>
          <input
            type="text"
            name="search"
            placeholder="Search for a movie"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          {search && <span onClick={handleClear}>&#10006;</span>}
          <button>Search</button>
        </div>
        <StarRating name="rating" value={rating} setValue={setRating} />
      </form>
    </div>
  );
}

export default SearchBar;
