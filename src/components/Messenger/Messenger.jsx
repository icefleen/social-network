import React from 'react';
import MessengerDialog from './MessengerDialog/MessengerDialog';
import MessengerMessage from './MessengerMessage/MessengerMessage';
import { NavLink } from 'react-router-dom';

const Messenger = (props) => {
  return (
    <section className="main__messenger messenger">
      <div className="messenger__dialogs dialogs">
        { props.state.dialogs.map((dialog) => 
          <NavLink to={`/messenger/${dialog.penPalId}`}>
            <MessengerDialog
              avatar={ dialog.avatar }
              lastMessage={ dialog.lastMessage }
            />
          </NavLink>
        ) }
      </div>
      <div className="messenger__messages messages">
        { props.state.messages.map( message => 
          <MessengerMessage
            from={ message.from }
            avatar={ message.avatar }
            fullName={ message.fullName }
            text={ message.text }
          />
        ) }
      </div>
    </section>
  )
};

export default Messenger;