import React from "react";

const MessengerDialog = (props) => {
  return (
    <div className="messenger__dialog dialog">
      <div className="dialog__avatar">
        <img src={props.avatar} alt="avatar" />
      </div>
      <div className="dialog__info">
        <div className="dialog__fullName">{props.fullname}</div>
        <div className="dialog__last-message">{props.lastMessage}</div>
      </div>
    </div>
  );
};

export default MessengerDialog;
