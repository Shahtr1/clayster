import React from "react";
import { MenuData } from "../../data/menu.data";
import { IMenu } from "../../data/model";
import { getMenuIcon } from "../../Common";

function MenuMb(activeMenu: IMenu) {
  return (
    <div className="Menu-mb-wrapper">
      <div className="Menu-mb">
        {MenuData.menusMb.map((menu, index) => (
          <span
            key={menu.menu}
            className="Menu-mb-item"
            style={{
              borderTopColor:
                activeMenu.menu === menu.menu ? "#2a3654" : "transparent",
            }}
          >
            <img src={getMenuIcon(menu.menu)} alt="" />
            <span>{menu.title}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default MenuMb;