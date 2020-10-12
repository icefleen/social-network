import React from 'react';

const MessengerMessage = (props) => {
  return (
    <div className="messages__message message" data-from={ props.from }>
      <div className="message__avatar">
        <img src={ props.avatar } alt="avatar"/>
      </div>
      <div className="message__info">
        <div className="message__fullname">
          { props.fullname }
        </div>
        <div className="message__text">
          { props.text }
        </div>
      </div>
    </div>
  )
}

export default MessengerMessage;