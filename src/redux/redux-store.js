import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profileReducer";
import messengerReducer from "./messengerReducer";
import peopleReducer from "./peopleReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
  profileState: profileReducer,
  messengerState: messengerReducer,
  peopleState: peopleReducer,
  auth: authReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
