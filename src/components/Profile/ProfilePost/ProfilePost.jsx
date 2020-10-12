import React from 'react';

const ProfilePost = (props) => {
  return (
    <div className="profile__block post">
      <div className="post__header">
        <div className="post__avatar">
          <img src={ props.avatar } alt="avatar"/>
        </div>
        <div className="post__info">
          <div className="post__owner">{ props.fullName }</div>
          <div className="post__datetime">{ props.datetime }</div>
        </div>
      </div>
      <div className="post__main">
        { props.text }
      </div>
      <div className="post__footer">
      </div>
    </div>
  )
}

export default ProfilePost;