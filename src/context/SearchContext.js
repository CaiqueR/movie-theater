import { createContext, useContext, useState } from "react";

const SearchContext = createContext({
  search: "",
  setSearch: () => {},
  results: [],
  setResults: () => {},
});

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  return (
    <SearchContext.Provider value={{ search, setSearch, results, setResults }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
