import React from "react";

import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import ProfileNewPost from "./ProfileNewPost";

const ProfileNewPostContainer = (props) => {
  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const updateNewPostText = (newText) => {
    props.store.dispatch(updateNewPostTextActionCreator(newText));
  };

  return (
    <ProfileNewPost
      addPost={addPost}
      updateNewPostText={updateNewPostText}
      newPostText={props.newPostText}
    />
  );
};

export default ProfileNewPostContainer;
