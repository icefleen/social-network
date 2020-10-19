import React from "react";
import classnames from "classnames";
import styles from "./Profile.module.scss";

import ProfileAbout from "./ProfileAbout/ProfileAbout";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileFriends from "./ProfileFriends/ProfileFriends";
import ProfilePost from "./ProfilePost/ProfilePost";
import ProfileNewPostContainer from "./ProfileNewPost/ProfileNewPostContainer";

const Profile = (props) => {
  return (
    <section className={classnames(props.className, styles.profile)}>
      <ProfileHeader />
      <div className={classnames(styles.profile__columns)}>
        <div className={classnames(styles.profile__left)}>
          <ProfileAbout className={styles.profile__block} />
          <ProfileFriends
            className={classnames(
              styles.profile__friends,
              styles.profile__block
            )}
            friends={props.profileState.friends}
          />
        </div>
        <div className={classnames(styles.profile__right)}>
          <ProfileNewPostContainer
            className={classnames(styles.profile__block)}
            newPostText={props.profileState.newPostText}
          />
          <div className={classnames(styles.posts)}>
            {[...props.profileState.profilePosts].reverse().map((post) => (
              <ProfilePost
                className={classnames(styles.profile__block)}
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
