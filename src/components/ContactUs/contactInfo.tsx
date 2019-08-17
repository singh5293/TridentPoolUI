import React, { FunctionComponent } from "react";

export const ContactInfo: FunctionComponent = () => {
  return (
    <div className="col-md-6">
      <div id="contact-left">
        <h3>TRDIENT POOL & SPA</h3>
        <p>
          We believe in <strong>Simple</strong>, <strong>Clean</strong> &{" "}
          <strong>Modern</strong> Designed infinity pool and jacuzzi.
        </p>

        <div id="contact-info">
          <address>
            <strong>Office:</strong>
            <br />
            <p>
              surbhi layout yelhanka
              <br />
              bangalore, India 560064
            </p>
          </address>
          <div id="phone-fax-email">
            <p>
              <strong>Phone:</strong>
              <span> (91) 9742745634 </span> <br />
              <strong>Fax:</strong>
              <span> (91) 9916010490 </span> <br />
              <strong>Email:</strong>
              <span> info@TridentPool.com </span> <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
