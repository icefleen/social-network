import React from 'react';

import ProfileAbout from './Profile/ProfileAbout';
import ProfileHeader from './Profile/ProfileHeader';
import ProfileFriends from './Profile/ProfileFriends';
import ProfileNewPost from './Profile/ProfileNewPost';
import ProfilePost from './Profile/ProfilePost';

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
            <ProfilePost />
          </div>
        </div>
      </div>
    </section>
  )
};

export default Profile;