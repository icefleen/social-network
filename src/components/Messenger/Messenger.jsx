import React from "react";
import MessengerDialog from "./MessengerDialog/MessengerDialog";
import MessengerMessage from "./MessengerMessage/MessengerMessage";
import { NavLink } from "react-router-dom";

const Messenger = (props) => {
  const onSendClicked = () => {
    props.addMessage();
  };

  const newMessageInput = React.createRef();

  const onNewMessageInputHandler = () => {
    props.updateNewMessageText(newMessageInput.current.value);
  };

  return (
    <section className="main__messenger messenger">
      <div className="messenger__dialogs dialogs">
        {props.state.dialogs.map((dialog) => (
          <NavLink to={`/messenger/${dialog.penPalId}`}>
            <MessengerDialog
              avatar={dialog.avatar}
              fullname={dialog.fullname}
              lastMessage={dialog.lastMessage}
            />
          </NavLink>
        ))}
      </div>
      <div className="messenger__messages messages">
        <div className="messages__content">
          {props.state.messages.map((message) => (
            <MessengerMessage
              from={message.from}
              avatar={message.avatar}
              fullName={message.fullName}
              text={message.text}
            />
          ))}
        </div>
        <div className="messages__new-message new-message">
          <input
            ref={newMessageInput}
            value={props.state.newMessageText}
            onChange={onNewMessageInputHandler}
            className="new-message__input"
            type="text"
            name="message text"
            placeholder="Write a message..."
          />

          <button
            type="button"
            className="new-message__submit"
            onClick={onSendClicked}
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default Messenger;
