import React from "react";
import styles from "./Messenger.module.scss";
import classnames from "classnames";

import MessengerDialog from "./MessengerDialog/MessengerDialog";
import MessengerMessage from "./MessengerMessage/MessengerMessage";
import { NavLink } from "react-router-dom";
import NewMessage from "./NewMessage/NewMessage";

const Messenger = (props) => {
  const onSendClicked = (formData) => {
    props.addMessage(formData.messageText);
    props.reset("newMessageForm");
  };

  return (
    <section className={classnames(styles.messenger)}>
      <div className={classnames(styles.messenger__dialogs, styles.dialogs)}>
        {props.dialogs.map((dialog) => (
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
          {props.messages.map((message) => (
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
        <NewMessage onSubmit={onSendClicked} />
      </div>
    </section>
  );
};

export default React.memo(Messenger);
