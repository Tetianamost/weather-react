import React, { useState } from "react";
import axios from "axios";
import "./SearchForm.css";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function SearchForm(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ loaded: false });
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
    let apiKey = "f3009e4852fa0a079dab291dabf020c4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function locateMe() {
    navigator.geolocation.getCurrentPosition(function (position) {
      let apiKey = "f3009e4852fa0a079dab291dabf020c4";
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
          <form
            className=" hstack gap-2 px-5 enter-city mt-4 "
            onSubmit={handleSubmit}
          >
            <input
              className="form-control  p-2 ml-5 inner-input"
              type="search"
              autoFocus="on"
              autoComplete="off"
              placeholder="Enter a city"
              onChange={updateCity}
            />

            <button
              type="submit"
              className="btn btn-outline-primary p-2 shadow-sm mb-2 mb-md-0 mx-1 search-button"
              onSubmit={handleSubmit}
            >
              <i class="fa-solid fa-location-arrow fa-lg"></i>
            </button>
            <button
              type="button"
              className="btn btn-info btn-sm-sm p-2 shadow-sm current mb-2 mx-1 mb-md-0"
              onClick={getPosition}
            >
              <i className="fa-solid fa-location-pin fa-lg"></i>
            </button>
          </form>
          <WeatherInfo data={weather} />
        </div>
        <div>
          <WeatherForecast coord={weather.coord} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
