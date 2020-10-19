import React from "react";
import styles from "./ProfileNewPost.module.scss";
import classnames from "classnames";

const ProfileNewPost = (props) => {
  const onSendClicked = () => {
    props.addPost();
  };

  const newPostInput = React.createRef();

  const onNewPostInputHandler = () => {
    props.updateNewPostText(newPostInput.current.value);
  };

  return (
    <div className={classnames(props.className, styles["new-post"])}>
      <input
        ref={newPostInput}
        onChange={onNewPostInputHandler}
        className={classnames(styles["new-post__input"])}
        type="text"
        name="post text"
        placeholder="What's in your mind?"
        value={props.newPostText}
      />

      <button
        type="button"
        className={classnames(styles["new-post__submit"])}
        onClick={onSendClicked}
      >
        Send
      </button>
    </div>
  );
};

export default ProfileNewPost;
