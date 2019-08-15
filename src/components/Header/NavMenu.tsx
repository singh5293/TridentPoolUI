import React, { FunctionComponent } from "react";
import { NavList } from "./NavList";
const navList = ["Home", "About", "Services", "Contact"];
export const NavMenu: FunctionComponent = () => {
  return (
    <ul className="nav navbar-nav">
      {navList.map(item => {
        return <NavList label={item} />;
      })}
    </ul>
  );
};
