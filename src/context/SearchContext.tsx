import { createContext, useState, ReactNode } from "react";
type SearchContextType = {
  search: string;
  setSearch: (value: string) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};
const SearchContext = createContext<SearchContextType | undefined>(undefined);

function SearchProvider({ children }: { children: ReactNode }) {
  const [search, setSearch] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleSearch = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch: handleSearch,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
export { SearchContext, SearchProvider };
