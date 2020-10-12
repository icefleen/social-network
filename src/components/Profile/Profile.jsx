import React from 'react';

import ProfileAbout from './ProfileAbout';
import ProfileHeader from './ProfileHeader';
import ProfileFriends from './ProfileFriends';
import ProfileNewPost from './ProfileNewPost';
import ProfilePost from './ProfilePost';

import avatar from '../../images/avatar.jpg';

const Profile = () => {
  return (
    <section className="main__profile profile">
      <ProfileHeader />
      <div className="profile__columns">
        <div className="profile__left">
          <ProfileAbout />
          <ProfileFriends />
        </div>
        <div className="profile__right">
          <ProfileNewPost />
          <div className="posts">
            <ProfilePost
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim est eos nisi, totam esse reiciendis officiis, quidem similique debitis perspiciatis eaque sint harum atque amet maiores asperiores! Laudantium placeat doloremque eius sit quo earum cupiditate tempora minus. Quis repellat voluptas suscipit nisi, vitae aliquam saepe! Asperiores quasi error esse corrupti eligendi aspernatur facilis doloremque repudiandae unde libero atque, velit nulla cupiditate, facere itaque quam deserunt odit ut. Id est quas voluptas nisi, inventore voluptatem libero. Provident laboriosam, aspernatur eligendi amet, nesciunt placeat quod ipsam facere inventore incidunt praesentium vel cumque autem harum alias consequuntur porro facilis nihil? Porro, velit saepe."
              avatar={avatar}
              datetime="49 minutes ago"
            />
            <ProfilePost
              text="Hello, World!"
              avatar={avatar}
              datetime="56 minutes ago"
            />
          </div>
        </div>
      </div>
    </section>
  )
};

export default Profile;