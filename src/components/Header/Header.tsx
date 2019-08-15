import React, { FunctionComponent } from "react";
import { NavMenu } from "./NavMenu";
import { HeaderLogo } from "./HeaderLogo";

export const Header: FunctionComponent = () => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <HeaderLogo />
            <NavMenu />
          </div>
        </nav>
      </div>
    </div>
  );
};
