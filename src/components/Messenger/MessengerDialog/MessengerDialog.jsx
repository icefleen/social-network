import React from "react";
import styles from "./MessengerDialog.module.scss";
import classnames from "classnames";

const MessengerDialog = (props) => {
  return (
    <div className={classnames(props.className, styles.dialog)}>
      <div className={classnames(styles.dialog__avatar)}>
        <img src={props.avatar} alt="avatar" />
      </div>
      <div className={classnames(styles.dialog__info)}>
        <div className={classnames(styles.dialog__fullName)}>
          {props.fullName}
        </div>
        <div className={classnames(styles["dialog__last-message"])}>
          {props.lastMessage}
        </div>
      </div>
    </div>
  );
};

export default MessengerDialog;
