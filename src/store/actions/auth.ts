import { ILogIn } from "./types";

export const isLoggedIn = (): ILogIn => {
  return {
    type: "LOGIN"
  };
};
