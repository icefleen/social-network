import React from 'react';
import MessengerDialog from './MessengerDialog';
import avatar from '../../images/avatar.jpg';
import emmaAvatar from '../../images/emma-avatar.jpg';
import MessengerMessage from './MessengerMessage';
import { NavLink } from 'react-router-dom';

const Messenger = () => {
  return (
    <section className="main__messenger messenger">
      <div className="messenger__dialogs dialogs">
        {[1, 2, 3, 4, 5, 6].map((id) => 
          <NavLink to={`/messenger/${id}`}>
            <MessengerDialog
              avatar={ emmaAvatar }
              message="Hello :) My name is Emma and i am 18 years old"
            />
          </NavLink>
        )}
      </div>
      <div className="messenger__messages messages">
        <MessengerMessage
          from="me"
          avatar={ avatar }
          fullname="Daniil Yandybaev"
          text="Hi! How old are you?"
        />
        <MessengerMessage
          from="other"
          avatar={ emmaAvatar }
          fullname="Emma Watson"
          text="Hello :) My name is Emma and i am 18 years old. How are you?"
        />
      </div>
    </section>
  )
};

export default Messenger;