import React from "react";
import styles from "./MessengerMessage.module.scss";
import classnames from "classnames";

const MessengerMessage = (props) => {
  return (
    <div
      className={classnames(props.className, styles.message)}
      data-from={props.from}
    >
      <div className={classnames(styles.message__avatar)}>
        <img src={props.avatar} alt="avatar" />
      </div>
      <div className={classnames(styles.message__info)}>
        <div className={classnames(styles.message__fullName)}>
          {props.fullName}
        </div>
        <div className={classnames(styles.message__text)}>{props.text}</div>
      </div>
    </div>
  );
};

export default MessengerMessage;
