import { Action } from "redux";
export const LOGIN = "LOGIN";

export interface ILogIn extends Action {
  type: "LOGIN";
}

export interface authState {
  loggedIn: boolean;
}
