import React from "react";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className=" d-flex">
        <ul className="tab  my-3">
          <li className="h3">{props.data.city}</li>
          <li className="h6">{props.data.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col d-flex align-items-center">
          <img
            className="icon ms-3"
            src={props.data.icon}
            alt={props.data.description}
          />
          <strong className="m-3 currentTemp h1">
            {Math.round(props.data.temperature)}
          </strong>{" "}
          <span className="units">°C</span>
        </div>
        <div className="col weather-details d-flex m-md-5 m-sm-3">
          <ul>
            <li>Feels like: {Math.round(props.data.feels)}°C</li>
            <li>Wind: {Math.round(props.data.wind)} mph</li>
            <li>Humidity: {props.data.humidity}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
