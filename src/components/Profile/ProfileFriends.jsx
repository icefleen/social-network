import React from 'react';

import emmaAvatar from '../../images/emma-avatar.jpg';
import paulAvatar from '../../images/paul-avatar.jpg';
import elenaAvatar from '../../images/elena-avatar.jpg';
import katrinAvatar from '../../images/katrin-avatar.jpg';
import steveAvatar from '../../images/steve-avatar.jpg';
import alexAvatar from '../../images/alex-avatar.jpg';

const ProfileFriends = () => {
  return (
    <div className="profile__friends profile__block friends">
      <h3 className="about__title">Friends <span className="friends__count">46</span></h3>
      <div className="friends__list">
      <div className="friends__item friend">
          <div className="friend__avatar">
            <img src={ emmaAvatar } alt="avatar"/>
          </div>
          <div className="friend__name">Emma</div>
        </div>
        <div className="friends__item friend">
          <div className="friend__avatar">
            <img src={ steveAvatar } alt="avatar"/>
          </div>
          <div className="friend__name">Steve</div>
        </div>
        <div className="friends__item friend">
          <div className="friend__avatar">
            <img src={ katrinAvatar } alt="avatar"/>
          </div>
          <div className="friend__name">Katrin</div>
        </div>
        <div className="friends__item friend">
          <div className="friend__avatar">
            <img src={ paulAvatar } alt="avatar"/>
          </div>
          <div className="friend__name">Paul</div>
        </div>
        <div className="friends__item friend">
          <div className="friend__avatar">
            <img src={ alexAvatar } alt="avatar"/>
          </div>
          <div className="friend__name">Alex</div>
        </div>
        <div className="friends__item friend">
          <div className="friend__avatar">
            <img src={ elenaAvatar } alt="avatar"/>
          </div>
          <div className="friend__name">elena</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileFriends;