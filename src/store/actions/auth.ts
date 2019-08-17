import { ILogIn, ISendMail } from "./types";
import axios from "axios";

export const isLoggedIn = (): ILogIn => {
  return {
    type: "LOGIN"
  };
};

export const sendEmail = (email: any): any => {
  return (dispatch: any) => {
    axios({
      method: "post",
      url: "https://tridentpoolapi.herokuapp.com/sendMail",

      data: JSON.stringify(email)
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
};
