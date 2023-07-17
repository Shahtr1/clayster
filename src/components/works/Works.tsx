import React from "react";
import WorkItem from "./Work-item";
import { WorkData } from "../../data/works.data";

function Works() {
  return (
    <div className="Works-wrapper">
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