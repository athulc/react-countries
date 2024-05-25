import { useEffect, useState } from "react";
import "./CountryDetail.css";
import { Link, useLocation, useOutletContext, useParams } from "react-router-dom";
import CountryDetailShimmer from "./CountryDetailShimmer";
import { useTheme } from "../hooks/useTheme";
// import { useWindowSize } from "../hooks/useWindowSize";

export default function CountryDetail() {
  // const countryName = new URLSearchParams(location.search).get("name");
  const { country } = useParams();
  const { state } = useLocation();
  // const [isDark] = useOutletContext();
  const [isDark] = useTheme();
  // const windowSize = useWindowSize();
  console.log(country, state);

  const [countryData, setCountryData] = useState(null);
  const [error, setError] = useState(false);

  function updateCountryData(data) {
    setCountryData({
      name: data.name.common || data.name,
      nativeName: Object.values(data.name.nativeName || {})[0]?.common,
      population: data.population,
      region: data.region,
      subregion: data.subregion,
      capital: data.capital,
      flag: data.flags.svg,
      tld: data.tld,
      currencies: Object.values(data.currencies || {})
        .map((currency) => currency.name)
        .join(", "),
      languages: Object.values(data.languages || {}).join(", "),
      borders: [],
    });

    // data.borders.map((border) => {
    //   fetch(`https://restcountries.com/v3.1/alpha/${border}`)
    //     .then((res) => res.json())
    //     .then(([borderCountry]) => setCountryData((prevValue) => ({ ...prevValue, borders: [...prevValue.borders, borderCountry.name.common] })));
    // });

    if (!data.borders) {
      data.borders = [];
    }

    Promise.all(
      data.borders.map((border) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common);
      })
    ).then((borders) => setTimeout(() => setCountryData((prevState) => ({ ...prevState, borders }))));
  }

  useEffect(() => {
    if (state) {
      updateCountryData(state);
      return;
    }
    fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        console.log(data);
        updateCountryData(data);
      })
      .catch((err) => setError(true));
  }, [country]);
  if (error) {
    return (
      <div style={{ margin: "0 auto", height: "100vh", position: "relative" }}>
        <h1 style={{ position: "absolute", inset: "0px" }}>Country Not Found!</h1>
      </div>
    );
  }
  return (
    <main className={isDark ? "dark" : ""}>
      {/* <h1 style={{textAlign: 'center'}}>{windowSize.width} X {windowSize.height}</h1> */}
      <div className="country-details-container">
        <span className="back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        {countryData == null ? (
          <CountryDetailShimmer />
        ) : (
          <div className="country-details">
            <img src={countryData.flag} alt={`${countryData.name} flag`} />
            <div className="details-text-container">
              <h1>{countryData.name}</h1>
              <div className="details-text">
                <p>
                  <b>Native Name: </b>
                  <span className="native-name">{countryData.nativeName || countryData.name}</span>
                </p>
                <p>
                  <b>Population: </b>
                  <span className="population">{countryData.population.toLocaleString("en-IN")}</span>
                </p>
                <p>
                  <b>Region: </b>
                  <span className="region">{countryData.region}</span>
                </p>
                <p>
                  <b>Sub Region: </b>
                  <span className="native-name">{countryData.subregion}</span>
                </p>
                <p>
                  <b>Capital: </b>
                  <span className="population">{countryData.capital?.join(", ")}</span>
                </p>
                <p>
                  <b>Top Level Domain: </b>
                  <span className="region">{countryData.tld}</span>
                </p>
                <p>
                  <b>Currencies: </b>
                  <span className="native-name">{countryData.currencies}</span>
                </p>
                <p>
                  <b>Languages: </b>
                  <span className="population">{countryData.languages}</span>
                </p>
              </div>
              {countryData.borders.length !== 0 && (
                <div style={{ marginTop: "40px" }}>
                  <b>Border Countries: </b>
                  <span className="border-countries">
                    {countryData.borders.map((border) => (
                      <Link key={border} to={`/${border}`}>
                        {border}
                      </Link>
                    ))}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
