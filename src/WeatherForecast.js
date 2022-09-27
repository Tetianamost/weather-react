import axios from "axios";
import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  function load() {
    let apiKey = "082d3d02ffdb12f2fd9b259e2ced1d0d";
    let lon = props.coord.lon;
    let lat = props.coord.lat;

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row mt-4">
          {forecast.map(function (dailyForecast, index) {
            let icon = dailyForecast.weather[0].icon;
            if (index < 4) {
              return (
                <div className="col justify-content-space-between tab-forecast">
                  <WeatherForecastDay
                    data={dailyForecast}
                    icon={`media/icons/${icon}.svg`}
                  />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
