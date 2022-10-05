import axios from "axios";
import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import { motion } from "framer-motion";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  let units = "imperial";
  if (props.unit === "celsius") {
    units = "metric";
  }

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  function load() {
    let apiKey = "40b745c14eadad7b7c4e6e4bf3b70103";
    let lon = props.coord.lon;
    let lat = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <motion.div
        drag="x"
        dragConstraints={{ left: 5, right: 5 }}
        className="WeatherForecast"
      >
        <div className="row mt-4">
          {forecast.map(function (dailyForecast, index) {
            let icon = dailyForecast.weather[0].icon;
            if (index < 6) {
              return (
                <div key={index} className="col-2">
                  <WeatherForecastDay
                    data={dailyForecast}
                    icon={`media/icons/${icon}.svg`}
                    units={units}
                  />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </motion.div>
    );
  } else {
    load();
    return null;
  }
}
