import ThemeToggle from "./ThemeToggle";
import { useSearch } from "../context/SearchContext";

export default function Navbar() {
  const { search, setSearch } = useSearch();

  return (
    <div className="text-sm lg:text-md w-full">
      <nav
        className="
          flex
          items-center
          gap-2
          px-4
          py-3
          pl-16
          lg:pl-4
          lg:justify-center
          bg-light-surface
          dark:bg-dark-surface
        "
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search.."
          className="
            outline-none
            border-2
            dark:bg-dark-surface
            dark:border-dark-primary
            border-light-primary
            p-3
            rounded-lg
            flex-1
            min-w-0
            lg:max-w-125
            
          "
        />

        <ThemeToggle />
      </nav>
    </div>
  );
}
