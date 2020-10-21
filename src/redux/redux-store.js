import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import messengerReducer from "./messengerReducer";
import peopleReducer from "./peopleReducer";

const reducers = combineReducers({
  profileState: profileReducer,
  messengerState: messengerReducer,
  peopleState: peopleReducer
});

const store = createStore(reducers);

export default store;
