import React from "react";
import {
  getSkillIcon,
  getTitleIcon,
  goTo,
  WorkDetails,
} from "../../data/model";

function WorkItem(work: WorkDetails) {
  return (
    <div className="Work-item">
      <div className="Heading">{work.heading}</div>
      <div className="Work-item-Content-wrapper">
        <div
          className="Work-item-Cover"
          style={{ backgroundImage: `url(${work.cover})` }}
        ></div>
        <div className="Work-item-info-wrapper">
          <div className="Work-item-info">
            <div
              className="Company-icon-wrapper"
              style={{ backgroundColor: work.titleIconBgColor }}
            >
              <img src={getTitleIcon(work.titleIcon)} alt={work.titleIcon} />
            </div>
            <div className="Work-item-description">{work.description}</div>
            <span>Visit:</span>
            <div
              className="Work-item-link"
              onClick={() => goTo(work.link, true)}
            >
              {work.link}
            </div>
            <span>Tech Stacks include:</span>
            <div className="Work-item-skill">
              {work.skills.map((skill, index) => (
                <img key={index} src={getSkillIcon(skill)} alt={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkItem;