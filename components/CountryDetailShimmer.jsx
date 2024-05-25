import "./CountryDetailShimmer.css";

function CountryDetailShimmer() {
  return (
    <div className="country-details">
      <div className="flag-shimmer-container"></div>
      <div className="detail-container">
        <div className="title"></div>
        <div className="text-container">
          <div className="text-block">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="text-block">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="boundry-container">
          <div className="boundry-title"></div>
          <div className="boundry-tags-container">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetailShimmer;
