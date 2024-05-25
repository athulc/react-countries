import { useEffect, useState } from "react";
import countriesData from "../countriesData";
import CountryCard from "./CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";

function CountriesList({ search }) {
  const [countriesData, setCountriesData] = useState([]);
  // const [count, setCount] = useState(0);
  // const [count2, setCount2] = useState(0);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountriesData(data);
      });

    // const intervalId = setInterval(() => {
    //   console.log("Running in interval...");
    // }, 2000);

    // console.log(intervalId);

    return () => {
      // console.log("Cleaning up...");
      // clearInterval(intervalId);
    };
  }, []);

  // useEffect(() => {
  //   console.log("Hi");
  // }, [count, count2, countriesData]);

  // if (countriesData.length === 0) {

  // }

  // const handleClick = () => {
  //   setCount(count + 1);
  //   setCount2(count2 + 1);
  // };

  return (
    <>
      {/* <h1>{count}</h1>
      <button onClick={handleClick}>Increase Count</button> */}
      {countriesData.length === 0 ? (
        <CountriesListShimmer />
      ) : (
        <div className="countries-container">
          {countriesData
            .filter((country) => country.name.common.toLowerCase().includes(search) || country.region.toLowerCase().includes(search))
            .map((country) => (
              <CountryCard key={country.name.common} country={country} />
            ))}
        </div>
      )}
    </>
  );
}

export default CountriesList;
