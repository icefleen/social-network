import React from "react";
import Profile from "./Profile";

import { connect } from "react-redux";

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
    const userId = this.props.match.params.id || 1;

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
      />
    );
  }
}

const mapStateToProps = (state) => ({
  profileState: state.profileState,
});

export default compose(
  connect(mapStateToProps, {
    clearProfile,
    getProfile,
    updateStatus,
    addPost,
  }),
  withRouter,
  withAuthRedirect
)(ProfileAPI);
