import React, { FunctionComponent } from "react";
import { ContactInfo } from "./contactInfo";
import ContactForm from "./contactForm";
import { Footer } from "./Footer";

const Contact: FunctionComponent<{}> = () => {
  return (
    <>
      <footer>
        <div id="contact">
          <div className="container">
            <div className="row">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </div>
        <Footer />
      </footer>
    </>
  );
};

export { Contact as default };
