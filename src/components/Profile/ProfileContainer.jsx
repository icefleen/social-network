import React from "react";
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

class ProfileAPI extends React.Component {
  loadProfile = () => {
    const userId = this.props.match.params.id || this.props.userId;

    this.props.getProfile(userId);
  };

  componentDidMount = () => {
    this.loadProfile();
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadProfile();
    }
  };

  componentWillUnmount = () => {
    this.props.clearProfile();
  };

  render() {
    return (
      <Profile
        isLoading={this.props.isLoading}
        avatar={this.props.avatar}
        fullName={this.props.fullName}
        status={this.props.status}
        friends={this.props.friends}
        posts={this.props.posts}
        updateStatus={this.props.updateStatus}
        addPost={this.props.addPost}
        reset={this.props.reset}
      />
    );
  }
}

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
)(ProfileAPI);
