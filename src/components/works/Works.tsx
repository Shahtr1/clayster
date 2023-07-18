import React, { useEffect } from "react";
import WorkItem from "./Work-item";
import { WorkData } from "../../data/works.data";
import { isInViewport } from "../../common";

function Works() {
  useEffect(() => {
    window.onscroll = () => {};
  });

  return (
    <div className="Works-wrapper" id="works">
      <div className="Works">
        <span className="Title">Works</span>
        <div className="Content-wrapper">
          <div className="Content">
            {WorkData.works.map((work, index) => (
              <WorkItem
                key={index}
                titleIcon={work.titleIcon}
                description={work.description}
                link={work.link}
                skills={work.skills}
                cover={work.cover}
                heading={work.heading}
                titleIconBgColor={work.titleIconBgColor}
              ></WorkItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
