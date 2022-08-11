import React from "react";
import "./Date.css";
export default function Date() {
  let weatherData = { date: "Tuesday 4:40 PM" };
  return (
    <ul className="text-center">
      <li className="last-updated"> Last updated: </li>
      <li> {weatherData.date} </li>
    </ul>
  );
}
