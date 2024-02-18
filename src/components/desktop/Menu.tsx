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
        {MenuData.menus.map((menu, index) =>
          menu.menu === "blog" ? (
            <span key={index} className="Menu-item-wrapper">
              <a
                href={`https://blog.clayster.net`}
                target="_blank"
                className={`Menu-item`}
              >
                {menu.title}
              </a>
            </span>
          ) : (
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
          )
        )}
      </div>
    </div>
  );
}

export default Menu;
