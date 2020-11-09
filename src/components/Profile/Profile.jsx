import React from "react";
import classnames from "classnames";
import styles from "./Profile.module.scss";
import ProfileAbout from "./ProfileAbout/ProfileAbout";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileFriends from "./ProfileFriends/ProfileFriends";
import ProfilePost from "./ProfilePost/ProfilePost";
import ProfileNewPost from "./ProfileNewPost/ProfileNewPost";
import Spinner from "../common/Spinner/Spinner";

const Profile = ({
  addPost,
  reset,
  isLoading,
  avatar,
  fullName,
  status,
  updateStatus,
  friends,
  posts,
}) => {
  const onSendClicked = (formData) => {
    addPost(formData.postText);
    reset("newPostForm");
  };

  return (
    <>
      {isLoading && <Spinner />}
      {isLoading || (
        <section className={classnames(styles.profile)}>
          <ProfileHeader
            avatar={avatar}
            fullName={fullName}
            status={status}
            updateStatus={updateStatus}
          />
          <div className={classnames(styles.profile__columns)}>
            <div className={classnames(styles.profile__left)}>
              <ProfileAbout className={styles.profile__block} />
              <ProfileFriends
                className={classnames(
                  styles.profile__friends,
                  styles.profile__block
                )}
                friends={friends}
              />
            </div>
            <div className={classnames(styles.profile__right)}>
              <ProfileNewPost
                onSubmit={onSendClicked}
                className={classnames(styles.profile__block)}
              />
              <div className={classnames(styles.posts)}>
                {posts.map((post) => (
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
      )}
    </>
  );
};

export default React.memo(Profile);
