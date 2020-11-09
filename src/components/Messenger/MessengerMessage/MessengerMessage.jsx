import React from "react";
import styles from "./MessengerMessage.module.scss";
import classnames from "classnames";

const MessengerMessage = ({ className, from, avatar, fullName, text }) => {
  return (
    <div className={classnames(className, styles.message)} data-from={from}>
      <div className={classnames(styles.message__avatar)}>
        <img src={avatar} alt="avatar" />
      </div>
      <div className={classnames(styles.message__info)}>
        <div className={classnames(styles.message__fullName)}>{fullName}</div>
        <div className={classnames(styles.message__text)}>{text}</div>
      </div>
    </div>
  );
};

export default MessengerMessage;
