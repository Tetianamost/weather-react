import axios from "axios";
import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";

import Carousel from "./Carousel";

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
          <div className="col tab-forecast">
            <Carousel forecast={forecast} />
          </div>
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
