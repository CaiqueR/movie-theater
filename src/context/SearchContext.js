import { createContext, useContext, useState } from "react";

const SearchContext = createContext({
  search: "",
  setSearch: () => {},
  results: [],
  setResults: () => {},
  rating: 0,
  setRating: () => {},
});

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [rating, setRating] = useState(0);
  return (
    <SearchContext.Provider
      value={{ search, setSearch, results, setResults, rating, setRating }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
