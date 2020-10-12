import React from 'react';

import ProfileAbout from './ProfileAbout';
import ProfileHeader from './ProfileHeader';
import ProfileFriends from './ProfileFriends';
import ProfileNewPost from './ProfileNewPost';
import ProfilePost from './ProfilePost';

const Profile = (props) => {
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
            { props.profilePosts.map((post) => 
            <ProfilePost
              text={ post.text }
              avatar={ post.avatar }
              fullname={ post.fullname }
              datetime={ post.datetime }
            /> ) }
          </div>
        </div>
      </div>
    </section>
  )
};

export default Profile;