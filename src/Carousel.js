import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";

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
        <Carousel.Item>{props}</Carousel.Item>
      </Carousel>
    </div>
  );
}
