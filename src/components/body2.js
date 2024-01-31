import "../components/body2.css";
import React from "react";

const body2 = (props) => {
  let details = props.details || {};
  //sunrise sunset time
  const timestampt1 = details?.sys?.sunrise;
  const sunrise = new Date(timestampt1 * 1000);
  const timestampt2 = details?.sys?.sunset;
  const sunset = new Date(timestampt2 * 1000);
  return (
    <div>
      <div>
        {details.length === 0 ? (
          <div>loading.......</div>
        ) : (
          <div className="body2">
            <div className="body-main-2">
              <div className="cities">Added cities</div>
              <div className="boxes">
                <div className="row">
                  <div className="box">
                    <h1>Current Weather</h1>
                    <h3>{details?.weather[0]?.main || "N/A"}</h3>
                  </div>
                  <div className="box">
                    <h1>Humidity</h1>
                    <h3>{details?.main?.humidity || "N/A"}%</h3>
                  </div>
                  <div className="box">
                    <h1>Real feel</h1>
                    <h3>{(details?.main?.feels_like - 273.15).toFixed(2)}°C</h3>
                  </div>
                </div>
                <div className="row" style={{ margin: "1rem 0 1rem 0" }}>
                  <div className="box">
                    <h1>Rain</h1>
                    <h3>Past 1H : {details?.rain?.["1h"] || 0}mm</h3>
                    <h3>Past 3H :{details?.rain?.["3h"] || 0}mm</h3>
                  </div>
                  <div className="box">
                    <h1>Pressure</h1>
                    <h3>{details.main.pressure} mb</h3>
                  </div>
                  <div className="box">
                    <h1>Temp Max/Min</h1>
                    <h3>
                      Max: {(details.main.temp_max - 273.15).toFixed(2)}°C
                    </h3>
                    <h3>
                      Min: {(details.main.temp_min - 273.15).toFixed(2)}°C
                    </h3>
                  </div>
                </div>
                <div className="row">
                  <div className="box">
                    <h1>Visibility</h1>
                    <h3>{details.visibility / 1000}km</h3>
                  </div>
                  <div className="box">
                    <h1>Sun</h1>
                    <h3>
                      Rise- {sunrise.getHours()} : {sunrise.getMinutes()} AM{" "}
                    </h3>
                    <h3>
                      Set- {sunset.getHours()} : {sunset.getMinutes()} PM
                    </h3>
                  </div>
                  <div className="box">
                    <h1>Wind</h1>
                    <h3>{details.wind.speed} m/s</h3>
                  </div>
                </div>
              </div>
              <div className="extra">
                <div>Data provided by </div>
                <a
                  href="https://openweathermap.org"
                  target="_blank"
                  className="linkToSource"
                >
                  Open Weather
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default body2;
