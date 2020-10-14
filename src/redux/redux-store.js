import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import messengerReducer from "./messengerReducer";

const reducers = combineReducers({
  profileState: profileReducer,
  messengerState: messengerReducer,
});

const store = createStore(reducers);

export default store;
