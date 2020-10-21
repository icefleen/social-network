import React from "react";
import styles from "./Messenger.module.scss";
import classnames from "classnames";

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
    <section className={classnames(props.className, styles.messenger)}>
      <div className={classnames(styles.messenger__dialogs, styles.dialogs)}>
        {props.messengerState.dialogs.map((dialog) => (
          <NavLink to={`/messenger/${dialog.id}`} key={dialog.id}>
            <MessengerDialog
              classname={classnames(styles.messenger__dialog)}
              avatar={dialog.avatar}
              fullName={dialog.fullName}
              lastMessage={dialog.lastMessage}
            />
          </NavLink>
        ))}
      </div>
      <div className={classnames(styles.messenger__messages, styles.messages)}>
        <div className={classnames(styles.messages__content)}>
          {props.messengerState.messages.map((message) => (
            <MessengerMessage
              classname={classnames(styles.messenger__message)}
              key={message.id}
              from={message.from}
              avatar={message.avatar}
              fullName={message.fullName}
              text={message.text}
            />
          ))}
        </div>
        <div
          className={classnames(
            styles["messages__new-message"],
            styles["new-message"]
          )}
        >
          <input
            ref={newMessageInput}
            value={props.messengerState.newMessageText}
            onChange={onNewMessageInputHandler}
            className={classnames(styles["new-message__input"])}
            type="text"
            name="message text"
            placeholder="Write a message..."
          />

          <button
            type="button"
            className={classnames(styles["new-message__submit"])}
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
