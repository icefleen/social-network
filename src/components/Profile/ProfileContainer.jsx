import React from "react";
import Profile from "./Profile";

import { connect } from "react-redux";
import { reset } from "redux-form";

import {
  clearProfile,
  getProfile,
  updateStatus,
  addPost,
} from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

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
        profileState={this.props.profileState}
        updateStatus={this.props.updateStatus}
        addPost={this.props.addPost}
        reset={this.props.reset}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  profileState: state.profileState,
  userId: state.auth.userId,
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
