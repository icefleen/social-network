import React from "react";
import Profile from "./Profile";

import { connect } from "react-redux";
import * as axios from "axios";

import {
  setProfile,
  clearProfile,
  toggleLoading,
} from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";

class ProfileAPI extends React.Component {
  loadProfile = () => {
    const userId = this.props.match.params.id || 1;

    this.props.toggleLoading(true);

    axios.get(`/api/profile/${userId}`).then((response) => {
      this.props.setProfile(response.data);
      this.props.toggleLoading(false);
    });
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
  setProfile,
  clearProfile,
  toggleLoading,
})(withRouter(ProfileAPI));
