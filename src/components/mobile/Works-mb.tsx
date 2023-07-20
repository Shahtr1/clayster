import React from "react";
import { WorkData } from "../../data/works.data";
import Carousel from "../common/Carousel";
import Title from "../common/Title";

function WorksMb(props: { smallIntro: boolean }) {
  return (
    <div className={`Works-mb-wrapper `}>
      <div className="Works-mb">
        <Title
          title="My Works"
          variant="small"
          smallIntro={props.smallIntro}
        ></Title>
        <Carousel data={WorkData.works}></Carousel>
      </div>
    </div>
  );
}

export default WorksMb;
