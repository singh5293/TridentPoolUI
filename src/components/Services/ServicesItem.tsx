import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Iserviceitem {
  service: { icon: any; header: string; content: string };
}

export const ServicesItem: FunctionComponent<Iserviceitem> = ({ service }) => {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="service-item">
        <div className="service-item-icon">
          <FontAwesomeIcon className="iconStyle" icon={service.icon} />
        </div>
        <div className="service-item-title">
          <h3>{service.header}</h3>
        </div>
        <div className="service-item-desc">
          <p>{service.content}</p>
        </div>
      </div>
    </div>
  );
};
