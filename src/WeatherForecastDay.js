import React from "react";
import { motion } from "framer-motion";

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
    <motion.div
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
      drag="x"
      dragConstraints={{ left: 5, right: 5 }}
      className="WeatherForecastDay tab-forecast  justify-content-space-evenly "
    >
      <div className="WeatherForecast-day">{day()}</div>
      <img className="icon-sm" src={props.icon} alt={props.data.description} />
      <div className="WeatherForecast-temp">
        <span className="WeatherForecast-temp-max">{maxTemp()}°</span>
        <span className="WeatherForecast-temp-min">{minTemp()}°</span>
      </div>
    </motion.div>
  );
}
