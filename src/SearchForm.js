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
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      feels: response.data.main.feels_like,
      icon: `/media/icons/${response.data.weather[0].icon}.svg`,
      city: response.data.name,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "f3009e4852fa0a079dab291dabf020c4";
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
        type="submit"
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
  if (weather.loaded) {
    return (
      <div>
        <div className="searchWeather row">
          <FormattedDate date={weather.date} />
          {form}
          <WeatherInfo data={weather} />
        </div>
        <div>
          <WeatherForecast coord={weather.coord} icon={weather.icon} />
        </div>
      </div>
    );
  } else {
    return form;
  }
}
