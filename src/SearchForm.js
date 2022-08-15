import React, { useState } from "react";
import axios from "axios";
import "./SearchForm.css";

export default function SearchForm() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState(null);
  function showWeather(response) {
    setLoaded(true);
    setWeather({
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      feels: response.data.main.feels_like,
      icon: `./media/icons/${response.data.weather[0].icon}.svg`,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "e1956e988b4e323dd9d87160c0a34f29";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form
      className=" hstack gap-2 px-2 enter-city mt-4"
      onSubmit={handleSubmit}
    >
      <input
        className="form-control p-md-6 me-auto inner-input"
        type="search"
        autoFocus="on"
        autoComplete="off"
        placeholder="Enter a city"
        onChange={updateCity}
      />

      <button
        type="button"
        className="btn btn-outline-primary p-md-2 btn-sm-sm shadow-sm vw-70 search-button"
        onSubmit={handleSubmit}
      >
        Search
      </button>
      <button
        type="button"
        className="btn btn-info btn-sm-sm shadow-sm current"
      >
        Current
      </button>
    </form>
  );
  if (loaded) {
    return (
      <div className="searchWeather row">
        {form}
        <div className=" d-flex m-md-3">
          <ul className="tab  my-5">
            <li className="h3">{city}</li>
            <li className="h6">{weather.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col d-flex align-items-center">
            <img
              className="icon ms-3"
              src={weather.icon}
              alt={weather.description}
            />
            <strong className="m-3 currentTemp h1">
              {Math.round(weather.temperature)}°C
            </strong>
          </div>
          <div className="col weather-details d-flex m-md-5 m-sm-3 ">
            <ul className="tab">
              <li>Feels like: {Math.round(weather.feels)}°C</li>
              <li>Wind: {Math.round(weather.wind)} mph</li>
              <li>Humidity: {weather.humidity}%</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
