import "../components/navbar.css";
import React from "react";

const navbar = (props) => {
  const setCity = props.setCity;
  const setCountry = props.setCountry;

  return (
    <div>
      <div className="navbar-main">
        <div className="navbar-logo-name">
          <img
            className="navbar-logo-image"
            src={`https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png`}
            alt="logo"
          ></img>
          <div className="navbar-website-name">WeatherApp</div>
        </div>

        <form
          className="navbar-city-search"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="Enter City"
            className="navbar-input-box-1"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Enter Country"
            className="navbar-input-box-2"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
          <button className="search-button" type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="search-logo"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default navbar;
