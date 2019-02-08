import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import loggingMiddleware from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import axios from "axios";
import history from "../history.js";

const LOGIN = "LOGIN";

const initialState = {};

// export const loginQuery = () => {
//   return async dispatch
// }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { loggedIn: true };
  }
};

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware.withExtraArgument({ axios }),
    loggingMiddleware
  )
);

export default store;
