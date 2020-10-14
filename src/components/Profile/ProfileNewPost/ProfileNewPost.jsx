import React from "react";

const ProfileNewPost = (props) => {
  const onSendClicked = () => {
    props.addPost();
  };

  const newPostInput = React.createRef();

  const onNewPostInputHandler = () => {
    props.updateNewPostText(newPostInput.current.value);
  };

  return (
    <div className="profile__block new-post">
      <input
        ref={newPostInput}
        onChange={onNewPostInputHandler}
        className="new-post__input"
        type="text"
        name="post text"
        placeholder="What's in your mind?"
        value={props.newPostText}
      />

      <button
        type="button"
        className="new-post__submit"
        onClick={onSendClicked}
      >
        Send
      </button>
    </div>
  );
};

export default ProfileNewPost;
