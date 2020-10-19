import Profile from "./Profile";

import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
  profileState: state.profileState,
  ...ownProps,
});

const ProfileContainer = connect(mapStateToProps)(Profile);

export default ProfileContainer;
