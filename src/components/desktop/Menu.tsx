import React, { useEffect } from "react";
import { MenuData } from "../../data/menu.data";
import ellipse from "../../assets/icons/ellipse.png";

function Menu(props: any) {
  useEffect(() => {
    const menuElement = document.getElementById("menu-wrapper") as HTMLElement;
    menuElement.classList.add("Animate");
  });

  return (
    <div className="Menu-wrapper" id="menu-wrapper">
      <div className="Menu">
        {MenuData.menus.map((menu, index) => (
          <span key={index} className="Menu-item-wrapper">
            <a
              href={`#${menu.menu}`}
              className={`Menu-item ${
                props.activeMenu.menu === menu.menu ? "Active" : ""
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
