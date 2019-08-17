import React, { FunctionComponent } from "react";

export const Footer: FunctionComponent = () => {
  return (
    <div id="footer-bottom">
      <div className="container text-center">
        <div className="row text-center">
          <div className="offset-md-3 col-md-6 text-center">
            <div id="footer-copyrights" className="text-center">
              <p className="text-center">
                Copyrights &copy; 2019 All Rights Reserved by Trident Pool &
                Spa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
