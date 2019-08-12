import React, { FunctionComponent } from "react";

const Contact: FunctionComponent<{}> = () => {
  return (
    <>
      <footer>
        <div id="contact">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div id="contact-left">
                  <h3>TRDIENT POOL & SPA</h3>
                  <p>
                    We believe in <strong>Simple</strong>,{" "}
                    <strong>Clean</strong> & <strong>Modern</strong> Designed
                    infinity pool and jacuzzi.
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
              <div className="col-md-6">
                <div id="contact-right">
                  <h3>Contact Us</h3>
                  <form action="#">
                    <input
                      type="text"
                      name="full-name"
                      placeholder="Full Name"
                      className="form-control"
                    />
                    <input
                      type="text"
                      name="email"
                      placeholder="Email Address"
                      className="form-control"
                    />
                    <input
                      type="text"
                      name="PhoneNumber"
                      placeholder="phone"
                      className="form-control"
                    />
                    <textarea
                      name="message"
                      placeholder="Message..."
                      className="form-control"
                    />

                    <div id="send-btn">
                      <a
                        className="btn btn-lg btn-general btn-white"
                        href="#"
                        role="button"
                      >
                        SEND
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

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
      </footer>
    </>
  );
};

export { Contact as default };
