import React from 'react';
import avatar from '../../images/avatar.jpg';

const ProfilePost = () => {
  return (
    <div className="profile__block post">
      <div className="post__header">
        <div className="post__avatar">
          <img src={ avatar } alt="avatar"/>
        </div>
        <div className="post__info">
          <div className="post__owner">Daniil Yandybaev</div>
          <div className="post__datetime">49 minutes ago</div>
        </div>
      </div>
      <div className="post__main">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iusto ea tempore consectetur accusamus doloremque ad magnam sapiente quae itaque, consequuntur numquam corrupti vitae molestiae aperiam at quo. Consectetur animi laudantium ab fuga voluptate, amet pariatur accusantium eos mollitia sequi eius veniam odit corrupti fugiat eveniet quisquam fugit qui sunt?
      </div>
      <div className="post__footer">
      </div>
    </div>
  )
}

export default ProfilePost;