import React, { FunctionComponent } from "react";

export interface IHeader {
  label: string;
}

export const NavList: FunctionComponent<IHeader> = ({ label }): any => {
  return (
    <li>
      <a href={`#${label.toLowerCase()}`}>{label}</a>
    </li>
  );
};
