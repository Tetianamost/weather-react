import React from "react";

export default function WeatherInfo(props) {
  let tempMax = Math.round(props.data.tempMax);
  let feels = Math.round(props.data.feels);
  let tempMin = Math.round(props.data.tempMin);
  let humidity = props.data.humidity;
  let wind = Math.round(props.data.wind);
  return (
    <div>
      <div className=" d-flex">
        <ul className="tab text-center my-3">
          <li className="h1">{props.data.city}</li>
          <li className="h4">{props.data.description}</li>
        </ul>
      </div>
      <div className="row weatherInfo">
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
            <li>
              <i className="fa-solid fa-arrow-down"> </i>&nbsp; {tempMin}°C
            </li>
            <li>
              <i className="fa-solid fa-arrow-up"> </i>&nbsp; {tempMax}°C
            </li>
            <li>
              <i className="fa-solid fa-temperature-half"> </i>
              &nbsp; {feels}°C
            </li>
            <li>
              <i className="fa-solid fa-wind"> </i>&nbsp; {wind} mph
            </li>

            <li>
              <i className="fa-solid fa-droplet"></i> &nbsp;{humidity}%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
