import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useState } from "react";
// import { useOutletContext } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

export default function Home() {
  const [search, setSearch] = useState("");
  // const [isDark] = useOutletContext();
  const [isDark] = useTheme();
  console.log(isDark);

  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar setSearch={setSearch} />
        <SelectMenu setSearch={setSearch} />
      </div>
      {search === "unmount" ? "" : <CountriesList search={search} />}
    </main>
  );
}
