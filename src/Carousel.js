import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

export default function SlideDays(props) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        indicators={false}
        controls={true}
        interval={3000}
        nextIcon={
          <span aria-hidden="true" className="carousel-control-next-icon" />
        }
        prevIcon={
          <span aria-hidden="true" className="carousel-control-prev-icon" />
        }
      >
        {props.forecast.map(function (dailyForecast, index) {
          let icon = dailyForecast.weather[0].icon;
          if (index < 7) {
            return (
              <Carousel.Item key={index}>
                <WeatherForecastDay
                  data={dailyForecast}
                  icon={`media/icons/${icon}.svg`}
                />
              </Carousel.Item>
            );
          } else {
            return null;
          }
        })}
      </Carousel>
    </div>
  );
}
