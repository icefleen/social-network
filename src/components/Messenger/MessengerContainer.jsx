import React from "react";
import Messenger from "./Messenger";

import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/messengerReducer";

const MessengerContainer = (props) => {
  const addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  const updateNewMessageText = (newText) => {
    props.store.dispatch(updateNewMessageTextActionCreator(newText));
  };

  return (
    <Messenger
      state={props.state}
      addMessage={addMessage}
      updateNewMessageText={updateNewMessageText}
    />
  );
};

export default MessengerContainer;
