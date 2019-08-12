import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faTools,
  faBath,
  faSwimmingPool,
  faHotTub,
  faBroom,
  faSwimmer
} from "@fortawesome/free-solid-svg-icons";

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
            <div className="col-md-4 col-sm-6">
              <div className="service-item">
                <div className="service-item-icon">
                  <FontAwesomeIcon
                    className="iconStyle"
                    icon={faSwimmingPool}
                  />
                </div>
                <div className="service-item-title">
                  <h3>Infinity Pool</h3>
                </div>
                <div className="service-item-desc">
                  <p>we design infinity pools</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="service-item">
                <div className="service-item-icon">
                  <FontAwesomeIcon className="iconStyle" icon={faHotTub} />
                </div>
                <div className="service-item-title">
                  <h3>Jacuzzi</h3>
                </div>
                <div className="service-item-desc">
                  <p>we provide Jacuzzi of all sizes</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="service-item">
                <div className="service-item-icon">
                  <FontAwesomeIcon className="iconStyle" icon={faSwimmer} />
                </div>
                <div className="service-item-title">
                  <h3>swimming pool</h3>
                </div>
                <div className="service-item-desc">
                  <p>we design swimming pools based on user requirements</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="service-item">
                <div className="service-item-icon">
                  <FontAwesomeIcon className="iconStyle" icon={faBath} />
                </div>
                <div className="service-item-title">
                  <h3>customized pool</h3>
                </div>
                <div className="service-item-desc">
                  <p>we design customized pools which will fit anywhere</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="service-item">
                <div className="service-item-icon">
                  <FontAwesomeIcon className="iconStyle" icon={faBroom} />
                </div>
                <div className="service-item-title">
                  <h3>Cleaning</h3>
                </div>
                <div className="service-item-desc">
                  <p>we provide pool cleaning sevices</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="service-item">
                <div className="service-item-icon">
                  <FontAwesomeIcon className="iconStyle" icon={faTools} />
                </div>

                <div className="service-item-title">
                  <h3>Repair</h3>
                </div>
                <div className="service-item-desc">
                  <p>we provide pool repair services at your door</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Services as default };
