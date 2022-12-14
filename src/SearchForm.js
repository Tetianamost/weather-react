import React, { useState } from "react";
import axios from "axios";
import "./SearchForm.css";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import { motion } from "framer-motion";

export default function SearchForm(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ loaded: false });
  const [unit, setUnit] = useState("celsius");
  function showWeather(response) {
    setWeather({
      loaded: true,
      coord: response.data.coord,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      tempMin: response.data.main.temp_min,
      tempMax: response.data.main.temp_max,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      feels: response.data.main.feels_like,
      sunset: response.data.sys.sunset,
      sunrise: response.data.sys.sunrise,
      pressure: response.data.main.pressure,
      icon: `/media/icons/${response.data.weather[0].icon}.svg`,
      city: response.data.name,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function search() {
    let apiKey = "6bfa54f242cbb59343d4e58db578dc61";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function locateMe() {
    navigator.geolocation.getCurrentPosition(function (position) {
      let apiKey = "6bfa54f242cbb59343d4e58db578dc61";
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(showWeather);
    });
  }

  function getPosition(event) {
    event.preventDefault();
    locateMe();
  }

  if (weather.loaded) {
    return (
      <div>
        <div className="searchWeather row">
          <FormattedDate date={weather.date} />

          <form className="hstack gap-1 mt-4" onSubmit={handleSubmit}>
            <motion.input
              whileHover={{
                scale: 0.9,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 1.2 }}
              className="form-control rounded-pill p-2 "
              type="search"
              autoComplete="off"
              placeholder="Enter a city"
              onChange={updateCity}
            />

            <motion.button
              whileHover={{
                scale: 0.9,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 1.5 }}
              type="submit"
              className="btn btn-outline-primary p-2 shadow-sm  search-button"
              onSubmit={handleSubmit}
            >
              <i className="fa-solid fa-location-arrow fa-lg"></i>
            </motion.button>

            <motion.button
              whileHover={{
                scale: 0.8,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 1.3 }}
              type="button"
              className="btn btn-info btn-sm-sm p-2 shadow-sm current "
              onClick={getPosition}
            >
              <i className="fa-solid fa-location-pin fa-lg"></i>
            </motion.button>
          </form>
          <WeatherInfo data={weather} unit={unit} setUnit={setUnit} />
        </div>
        <div>
          <WeatherForecast coord={weather.coord} unit={unit} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
