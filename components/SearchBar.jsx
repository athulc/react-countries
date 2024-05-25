function SearchBar({ setSearch }) {
  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input onChange={handleSearch} type="text" placeholder="Search for the country..." />
    </div>
  );
}

export default SearchBar;
