import React from "react";
import Profile from "./Profile";

import { connect } from "react-redux";

import {
  clearProfile,
  getProfile
} from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";

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
    return <Profile profileState={this.props.profileState} />;
  }
}

const mapStateToProps = (state) => ({
  profileState: state.profileState,
});

export default connect(mapStateToProps, {
  clearProfile,
  getProfile
})(withRouter(ProfileAPI));
