import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { reset } from "redux-form";
import {
  clearProfile,
  getProfile,
  updateStatus,
  addPost,
} from "../../store/reducers/profileReducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
  getAvatar,
  getFriends,
  getFullName,
  getIsLoading,
  getPostsReversed,
  getStatus,
} from "../../store/selectors/profileSelectors";
import { getUserId } from "../../store/selectors/authSelectors";

const ProfileContainer = ({
  match,
  userId,
  getProfile,
  clearProfile,
  isLoading,
  avatar,
  fullName,
  status,
  friends,
  posts,
  updateStatus,
  addPost,
  reset,
}) => {
  const userIdFromAddress = match.params.id;

  useEffect(() => {
    const profileIdToLoad = userIdFromAddress || userId;
    getProfile(profileIdToLoad);
    return () => clearProfile();
  }, [getProfile, match, userId, clearProfile, userIdFromAddress]);

  return (
    <Profile
      isLoading={isLoading}
      avatar={avatar}
      fullName={fullName}
      status={status}
      friends={friends}
      posts={posts}
      updateStatus={updateStatus}
      addPost={addPost}
      reset={reset}
      isOwner={userIdFromAddress === undefined || userId === +userIdFromAddress}
    />
  );
};

const mapStateToProps = (state) => ({
  isLoading: getIsLoading(state),
  avatar: getAvatar(state),
  fullName: getFullName(state),
  status: getStatus(state),
  friends: getFriends(state),
  posts: getPostsReversed(state),
  userId: getUserId(state),
});

export default compose(
  connect(mapStateToProps, {
    clearProfile,
    getProfile,
    updateStatus,
    addPost,
    reset,
  }),
  withRouter,
  withAuthRedirect
)(React.memo(ProfileContainer));
