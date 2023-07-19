import React from "react";
import { useSnapCarousel } from "react-snap-carousel";
import { IWork } from "../../data/model";
import { getTitleIcon, goTo } from "../../Common";
import link from "../../assets/icons/link.png";

function Carousel(carouselProps: { data: IWork[] }) {
  const { scrollRef } = useSnapCarousel();
  return (
    <div className="Carousel-wrapper">
      <ul ref={scrollRef} className="Carousel">
        {carouselProps.data.map((work, index) => (
          <li
            className="Carousel-item"
            key={index}
            style={{ backgroundImage: `url(${work.cover})` }}
          >
            <div className="Carousel-item-heading">
              <img src={getTitleIcon(work.titleIcon)} alt={work.heading} />
            </div>
            <div
              className="Carousel-item-link"
              onClick={() => goTo(work.link, true)}
            >
              <img src={link} alt="link" />
            </div>

            <div className="Carousel-item-content">{work.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Carousel;
