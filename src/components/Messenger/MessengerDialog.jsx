import React from 'react';

const MessengerDialog = (props) => {
  return (
    <div className="messenger__dialog dialog">
      <div className="dialog__avatar">
        <img src={ props.avatar } alt="avatar"/>
      </div>
      <div className="dialog__info">
        <div className="dialog__fullname">Emma Watson</div>
        <div className="dialog__last-message">
          { props.message }
        </div>
      </div>
    </div>
  )
}

export default MessengerDialog;