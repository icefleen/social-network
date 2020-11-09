import React from "react";
import styles from "./MessengerDialog.module.scss";
import classnames from "classnames";

const MessengerDialog = ({ className, avatar, fullName, lastMessage }) => {
  return (
    <div className={classnames(className, styles.dialog)}>
      <div className={classnames(styles.dialog__avatar)}>
        <img src={avatar} alt="avatar" />
      </div>
      <div className={classnames(styles.dialog__info)}>
        <div className={classnames(styles.dialog__fullName)}>{fullName}</div>
        <div className={classnames(styles["dialog__last-message"])}>
          {lastMessage}
        </div>
      </div>
    </div>
  );
};

export default React.memo(MessengerDialog);
