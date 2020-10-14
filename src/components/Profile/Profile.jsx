import React from "react";

import ProfileAbout from "./ProfileAbout/ProfileAbout";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileFriends from "./ProfileFriends/ProfileFriends";
import ProfilePost from "./ProfilePost/ProfilePost";
import ProfileNewPostContainer from "./ProfileNewPost/ProfileNewPostContainer";

const Profile = (props) => {
  return (
    <section className="main__profile profile">
      <ProfileHeader />
      <div className="profile__columns">
        <div className="profile__left">
          <ProfileAbout />
          <ProfileFriends friends={props.profileState.friends} />
        </div>
        <div className="profile__right">
          <ProfileNewPostContainer
            newPostText={props.profileState.newPostText}
          />
          <div className="posts">
            {[...props.profileState.profilePosts].reverse().map((post) => (
              <ProfilePost
                key={post.id}
                text={post.text}
                avatar={post.avatar}
                fullName={post.fullName}
                datetime={post.datetime}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
