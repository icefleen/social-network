import React from 'react';

const ProfileNewPost = () => {
  let onSendClicked = () => {
    let text = newPostInput.current.value;
    alert(text);
  };

  let newPostInput = React.createRef();

  return (
    <div className="profile__block new-post">
      <input ref={ newPostInput } className="new-post__input" type="text" name="post text" placeholder="What's in your mind?" />
      <button type="button" className="new-post__submit" onClick={ onSendClicked }>Send</button>
    </div>
  )
}

export default ProfileNewPost;