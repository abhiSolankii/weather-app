import "./App.css";
import Navbar from "./components/navbar.js";
import Body1 from "./components/body1.js";
import Body2 from "./components/body2.js";
import { useEffect, useState } from "react";
function App() {
  //location cordinates
  const openCageKey = "20459b2619774ff29558f1eaa0cff1fc";
  const [cordinateDetails, setCordinateDetails] = useState([]);
  const [loadingWeather, setLoadingWeather] = useState(true);
  const [loadingCords, setLoadingCords] = useState(true);
  const [city, setCity] = useState("pune");
  const [country, setCountry] = useState("india");
  const [lat, setLat] = useState("18.516726");
  const [lon, setLon] = useState("73.856255");

  useEffect(() => {
    const URL2 = `https://api.opencagedata.com/geocode/v1/json?q=${city},${country}&key=${openCageKey}`;
    fetch(URL2)
      .then((response) => response.json())
      .then((cords) => {
        setCordinateDetails(cords);
        setLoadingCords(false);
        setLat(cordinateDetails?.results[0]?.geometry?.lat);
        setLon(cordinateDetails?.results[0]?.geometry?.lng);

        console.log(city, country);
        console.log(cordinateDetails);
      })
      .catch((error) => {
        console.log("cords error: ", error);
        setLoadingCords(false);
      });
  }, [city, country]);

  //weather details
  const openWeatherKey = "9f911007963bef3ddfd761fd272ec385";

  const [details, setDetails] = useState([]);

  useEffect(() => {
    if (!loadingCords) {
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openWeatherKey}`;

      fetch(URL)
        .then((response) => response.json())
        .then((weather) => {
          setDetails(weather);
          setLoadingWeather(false);
        })
        .catch((error) => {
          console.log("Error occured: ", error);
          setLoadingWeather(false);
        });
    }
  }, [lat, lon]);

  console.log(details);
  console.log(lat, lon);
  return (
    <div>
      {loadingWeather && loadingCords ? (
        <div>loading...</div>
      ) : (
        <div>
          <Navbar setCity={setCity} setCountry={setCountry} />
          <div className="body">
            <div className="body-1">
              {details ? (
                <Body1
                  details={details}
                  loadingWeather={loadingWeather}
                  loadingCords={loadingCords}
                />
              ) : (
                <div>No weather data available</div>
              )}
            </div>
            <div className="body-2">
              {details ? (
                <Body2 details={details} />
              ) : (
                <div>No weather data available</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
