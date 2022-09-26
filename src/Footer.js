import React from "react";
import "./Footer.css";
import Image from "./tetiana_mostova.JPG";
export default function Footer() {
  return (
    <div className="Footer">
      <img className="my-image" src={Image} alt="tetiana_mostova" />
      <span className="coded-by text-muted">
        <a
          href="https://github.com/Tetianamost/weather-react"
          target="_blank"
          rel="noreferrer noopener"
        >
          Coded&nbsp;
        </a>
        by Tetiana Mostova
      </span>
    </div>
  );
}
