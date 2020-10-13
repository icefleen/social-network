import React from 'react';

import ProfileAbout from './ProfileAbout/ProfileAbout';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfileFriends from './ProfileFriends/ProfileFriends';
import ProfileNewPost from './ProfileNewPost/ProfileNewPost';
import ProfilePost from './ProfilePost/ProfilePost';

const Profile = (props) => {
  return (
    <section className="main__profile profile">
      <ProfileHeader />
      <div className="profile__columns">
        <div className="profile__left">
          <ProfileAbout />
          <ProfileFriends friends={ props.state.friends } />
        </div>
        <div className="profile__right">
          <ProfileNewPost
            addPost={ props.addPost }
            newPostText={ props.state.newPostText }
            updateNewPostText={ props.updateNewPostText }
          />
          <div className="posts">
            { [...props.state.profilePosts].reverse().map((post) => 
            <ProfilePost
              text={ post.text }
              avatar={ post.avatar }
              fullName={ post.fullName }
              datetime={ post.datetime }
            /> ) }
          </div>
        </div>
      </div>
    </section>
  )
};

export default Profile;