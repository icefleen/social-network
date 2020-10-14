import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import messengerReducer from "./messengerReducer";

const reducers = combineReducers({
  profile: profileReducer,
  messenger: messengerReducer,
});

const store = createStore(reducers);

export default store;
