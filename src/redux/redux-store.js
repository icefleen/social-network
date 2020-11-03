import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import messengerReducer from "./messengerReducer";
import peopleReducer from "./peopleReducer";
import authReducer from "./authReducer";

const reducers = combineReducers({
  profileState: profileReducer,
  messengerState: messengerReducer,
  peopleState: peopleReducer,
  auth: authReducer
});

const store = createStore(reducers);

export default store;
