import React from 'react';

const ProfileNewPost = () => {
  return (
    <div className="profile__block new-post">
      <input class="new-post__input" type="text" name="post text" placeholder="What's in your mind?" />
      <button type="button" class="new-post__submit">Send</button>
    </div>
  )
}

export default ProfileNewPost;