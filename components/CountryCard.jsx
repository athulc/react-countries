import { Link } from "react-router-dom";

function CountryCard({ country }) {
  const { name, flags, population, region, capital } = country;
  return (
    <Link className="country-card" to={`/${name.common}`} state={country}>
      <div className="flag-container">
        <img src={flags.svg} alt={name.common + " flag"} />
      </div>

      <div className="card-text">
        <h3 className="card-title">{name.common}</h3>
        <p>
          <b>Population: </b>
          {population.toLocaleString("en-IN")}
        </p>
        <p>
          <b>Region: </b>
          {region}
        </p>
        <p>
          <b>Capital: </b>
          {capital?.[0]}
        </p>
      </div>
    </Link>
  );
}

export default CountryCard;
