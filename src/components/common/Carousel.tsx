import React from "react";
import { useSnapCarousel } from "react-snap-carousel";

function Carousel(carouselProps: { data: any[] }) {
  const { scrollRef, pages, activePageIndex, next, prev, goTo } =
    useSnapCarousel();
  return (
    <div className="Carousel-wrapper">
      <ul ref={scrollRef} className="Carousel">
        {carouselProps.data.map((prop, index) => (
          <li className="Carousel-item" key={index}>
            {prop.heading}
          </li>
        ))}
      </ul>
      {/*<div>*/}
      {/*  {activePageIndex + 1} / {pages.length}*/}
      {/*</div>*/}
      {/*<button onClick={() => prev()}>Prev</button>*/}
      {/*<button onClick={() => next()}>Next</button>*/}
      {/*<ol style={{ display: "flex" }}>*/}
      {/*  {pages.map((_, i) => (*/}
      {/*    <li key={i}>*/}
      {/*      <button*/}
      {/*        style={i === activePageIndex ? { opacity: 0.5 } : {}}*/}
      {/*        onClick={() => goTo(i)}*/}
      {/*      >*/}
      {/*        {i + 1}*/}
      {/*      </button>*/}
      {/*    </li>*/}
      {/*  ))}*/}
      {/*</ol>*/}
    </div>
  );
}

export default Carousel;
