import React from "react";
import { motion } from "framer-motion";

export default function WeatherInfo(props) {
  let tempMax = Math.round(props.data.tempMax);
  let feels = Math.round(props.data.feels);
  let tempMin = Math.round(props.data.tempMin);
  let humidity = props.data.humidity;
  let wind = Math.round(props.data.wind);

  const showCelsius = (event) => {
    event.preventDefault();
    props.setUnit("celsius");
  };

  const showFahrenheit = (event) => {
    event.preventDefault();
    props.setUnit("fahrenheit");
  };

  const convertFahrenheit = (temp) => Math.round((temp * 9) / 5 + 32);

  const convertKph = (wind) => Math.round(wind * 1.61);

  if (props.unit === "celsius") {
    return (
      <div>
        <div className="d-flex">
          <motion.ul
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            drag="x"
            dragConstraints={{ left: 20, right: 20 }}
            className="tab text-center my-3"
          >
            <li className="h1">{props.data.city}</li>
            <li className="h6">{props.data.description}</li>
          </motion.ul>
        </div>
        <div className="row weatherInfo">
          <motion.div className="col d-flex align-items-center">
            <img
              className="icon ms-3"
              src={props.data.icon}
              alt={props.data.description}
            />
            <strong className="my-3 currentTemp h1">
              {Math.round(props.data.temperature)}
            </strong>{" "}
            <motion.a
              drag="x"
              dragConstraints={{ left: 20, right: 20 }}
              whileHover={{
                scale: 1.3,
                x: 10,
                transition: { duration: 0.5 },
              }}
              href="/"
              onClick={showFahrenheit}
              className="units"
            >
              <i class="fa-solid fa-circle-dot">&nbsp;C</i>
            </motion.a>
          </motion.div>
          <div className="col weather-details d-flex justify-content-end m-md-5 m-sm-3">
            <motion.ul
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.5 },
              }}
              drag="x"
              dragConstraints={{ left: 20, right: 20 }}
            >
              <li>
                <i className="fa-solid fa-arrow-down"> </i>&nbsp; {tempMin}°
              </li>
              <li>
                <i className="fa-solid fa-arrow-up"> </i>&nbsp; {tempMax}°
              </li>
              <li>
                <i className="fa-solid fa-temperature-half"> </i>
                &nbsp; {feels}°
              </li>
              <li>
                <i className="fa-solid fa-wind"> </i>&nbsp; {wind}
                kph
              </li>

              <li>
                <i className="fa-solid fa-droplet"></i> &nbsp;{humidity}%
              </li>
            </motion.ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="d-flex">
          <motion.ul
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            drag="x"
            dragConstraints={{ left: 20, right: 20 }}
            className="tab text-center my-3"
          >
            <li className="h1">{props.data.city}</li>
            <li className="h6">{props.data.description}</li>
          </motion.ul>
        </div>
        <div className="row weatherInfo">
          <motion.div className="col d-flex align-items-center">
            <img
              className="icon ms-3"
              src={props.data.icon}
              alt={props.data.description}
            />
            <strong className="my-3 currentTemp h1">
              {convertFahrenheit(props.data.temperature)}
            </strong>{" "}
            <motion.a
              drag="x"
              dragConstraints={{ left: 20, right: 20 }}
              whileHover={{
                scale: 1.3,
                x: 10,
                transition: { duration: 0.5 },
              }}
              href="/"
              onClick={showCelsius}
              className="units"
            >
              <i class="fa-solid fa-circle-dot">&nbsp;F</i>
            </motion.a>{" "}
          </motion.div>
          <div className="col weather-details d-flex justify-content-end m-md-5 m-sm-3">
            <motion.ul
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.5 },
              }}
              drag="x"
              dragConstraints={{ left: 20, right: 20 }}
            >
              <li>
                <i className="fa-solid fa-arrow-down"> </i>&nbsp;{" "}
                {convertFahrenheit(tempMin)}°
              </li>
              <li>
                <i className="fa-solid fa-arrow-up"> </i>&nbsp;{" "}
                {convertFahrenheit(tempMax)}°
              </li>
              <li>
                <i className="fa-solid fa-temperature-half"> </i>
                &nbsp; {convertFahrenheit(feels)}°
              </li>
              <li>
                <i className="fa-solid fa-wind"> </i>&nbsp; {convertKph(wind)}{" "}
                mph
              </li>

              <li>
                <i className="fa-solid fa-droplet"></i> &nbsp;{humidity}%
              </li>
            </motion.ul>
          </div>
        </div>
      </div>
    );
  }
}
