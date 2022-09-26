import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}`;
  }
  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{day()}</div>
      {/* <img
        className="icon-sm"
        src={/media/icons/{props.data.weather[0].icon}.svg}}
        alt="weather icon"
      /> */}
      <div className="WeatherForecast-temp">
        <span className="WeatherForecast-temp-max">{maxTemp()}°</span>
        <span className="WeatherForecast-temp-min">{minTemp()}°</span>
      </div>
    </div>
  );
}
