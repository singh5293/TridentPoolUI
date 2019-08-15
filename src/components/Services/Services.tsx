import React, { FunctionComponent } from "react";
import { ServicesItem } from "./ServicesItem";
import { services } from "../../AppData/data";

const Services: FunctionComponent<{}> = () => {
  return (
    <div id="services">
      <div className="content-box">
        <div className="content-title">
          <h3>SERVICES</h3>
          <div className="content-title-underline" />
        </div>
        <div className="container">
          <div className="row">
            {services.map(service => {
              return <ServicesItem service={service} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Services as default };
