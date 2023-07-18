import React from "react";
import { MenuData } from "../data/menu.data";
import { MenuDetails } from "../data/model";
import ellipse from "../assets/icons/ellipse.png";

function Menu(activeMenu: MenuDetails) {
  return (
    <div className="Menu-wrapper">
      <div className="Menu">
        {MenuData.menus.map((menu, index) => (
          <span key={index} className="Menu-item-wrapper">
            <a
              href={`#${menu.menu}`}
              className={`Menu-item ${
                activeMenu.menu === menu.menu ? "Active" : ""
              }`}
            >
              {menu.title}
            </a>
            {index !== MenuData.menus.length - 1 && (
              <img src={ellipse} alt="ellipse" />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Menu;
