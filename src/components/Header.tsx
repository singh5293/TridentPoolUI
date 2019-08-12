import React, { FunctionComponent } from "react";
//import styled from "styled-components";

export const Header: FunctionComponent = () => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                Trident Pool & Spa
              </a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
