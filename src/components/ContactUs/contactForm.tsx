import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputElement from "../Common/Input";
import { checkValidity } from "../../util/utility";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { sendEmail } from "../../store/actions/auth";

interface Iprops {
  sendEmail: (email: any) => {};
}
interface myObj {
  elementType?: any;
  elementConfig: {
    placeholder: any;
    type: any;
  };
  value: any;
  validation: {
    required: any;
  };
  valid: any;
  touched: any;
  [key: string]: any;
}

interface Istate {
  contactForm: {
    [key: string]: any;
  };
  formIsValid: any;
}

export class ContactForm extends React.Component<Iprops, Istate> {
  state = {
    contactForm: {
      fullName: {
        elementType: "input",
        elementConfig: {
          placeholder: "Full Name",
          type: "text"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: "input",
        elementConfig: {
          placeholder: "Email Address",
          type: "email"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      phone: {
        elementType: "input",
        elementConfig: {
          placeholder: "Phone",
          type: "number"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      message: {
        elementType: "input",
        elementConfig: {
          placeholder: "Message...",
          type: "text"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      }
    },
    formIsValid: false
  };

  notify = () => {
    toast.info("Thank you! we will contact you soon!", {
      position: toast.POSITION.TOP_CENTER
    });
  };

  checkValidity = (value: string, rules: any) => {
    console.log(value, rules);
  };

  onSubmit = (e: any) => {
    e.preventDefault();
    const formData = {};
    for (let formElementIdentifier in this.state.contactForm) {
      formData[formElementIdentifier] = this.state.contactForm[
        formElementIdentifier
      ].value;
    }
    console.log(formData);
    let emailObj = {
      title: "Trident Pool",
      subject: "Contact us request from customer",
      body: formData,
      recipient: "psingh5293@gmail.com"
    };

    this.props.sendEmail(emailObj);
    // console.log(fullName, email, phone, message);
    this.notify();
  };

  inputChangeHandler = (event: any, id: any) => {
    let valid = checkValidity(
      event.target.value,
      this.state.contactForm[id].validation
    );
    const updateFormElement = {
      ...this.state.contactForm[id],
      value: event.target.value,
      touched: true,
      valid: valid
    };

    const updateContactForm = {
      ...this.state.contactForm,
      [id]: updateFormElement
    };

    let formIsValid = true;
    for (let inputIdentifier in updateContactForm) {
      formIsValid = updateContactForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ contactForm: updateContactForm, formIsValid: formIsValid });
  };

  render() {
    let formElementArray = [];
    for (let key in this.state.contactForm) {
      formElementArray.push({
        id: key,
        config: this.state.contactForm[key]
      });
    }

    console.log("array", formElementArray);

    return (
      <>
        <ToastContainer />
        <div className="col-md-6">
          <div id="contact-right">
            <h3>Contact Us</h3>
            <form onSubmit={this.onSubmit}>
              {formElementArray.map(formElement => {
                return (
                  <InputElement
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    changed={(event: any) =>
                      this.inputChangeHandler(event, formElement.id)
                    }
                  />
                );
              })}
              <div id="send-btn">
                <a
                  className="btn btn-lg btn-general btn-white"
                  href="/"
                  role="button"
                  onClick={this.onSubmit}
                >
                  SEND
                </a>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    sendEmail: (email: any) => dispatch(sendEmail(email))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ContactForm);
