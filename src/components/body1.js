import "../components/body1.css";
import React from "react";

function body1(props) {
  let details = props.details;
  let loadingWeather = props.loadingWeather;
  let loadingCords = props.loadingCords;
  const date = new Date();
  let dayOrNight = "Night";
  if (date.getHours() >= 6 && date.getHours() <= 18) {
    dayOrNight = "Day";
  }
  console.log(details);

  return (
    <div>
      {details.length === 0 ? (
        <div>loading........</div>
      ) : (
        <div className="body1">
          <div className="body-main-1">
            <img
              src={`https://openweathermap.org/img/wn/${details?.weather[0]?.icon}@4x.png`}
              className="weather-icon"
              alt="weather-icon"
            ></img>
            <div className="temp">
              {(details?.main.temp - 273.15).toFixed(2)}°C
            </div>
            <div className="weather-description">
              {details?.weather[0].description}
            </div>
            <div className="grey-line"></div>
            <div className="date">
              {date.getDate()}-
              {date.toLocaleDateString("en-US", { month: "short" })}-
              {date.getFullYear()}
            </div>
            <div className="time-day">
              {date.toLocaleDateString("en-US", { weekday: "long" })},
              {date.getHours()}:{date.getMinutes()}{" "}
              {date.getHours() < 12 ? "AM" : "PM"}
            </div>
            <div className="day-night">{dayOrNight}</div>
            <div className="city-name">{details?.name}</div>
            <div className="country-name">{details?.sys.country}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default body1;
