import { authState } from "../actions/types";

export const initialState: authState = {
  loggedIn: false
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "LOGIN":
      return {
        loggedIn: true
      };
    default:
      return state;
  }
};

export default reducer;
