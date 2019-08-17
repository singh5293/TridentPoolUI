import { Action } from "redux";
export const LOGIN = "LOGIN";

export interface ILogIn extends Action {
  type: "LOGIN";
}

export interface authState {
  loggedIn: boolean;
}

export interface ISendMail extends Action {
  type: "SEND_MAIL";
  payload: any;
}
