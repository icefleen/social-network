import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./reducers/profileReducer";
import messengerReducer from "./reducers/messengerReducer";
import peopleReducer from "./reducers/peopleReducer";
import authReducer from "./reducers/authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./reducers/appReducer";

const reducers = combineReducers({
  profileState: profileReducer,
  messengerState: messengerReducer,
  peopleState: peopleReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
