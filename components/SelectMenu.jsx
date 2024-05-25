const SelectMenu = ({setSearch}) => {
  return (
    <select className="filter-by-region" onChange={(e) => setSearch(e.target.value.toLowerCase())}>
      <option hidden>Filter By Region</option>
      <option value="">--Clear--</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default SelectMenu;
