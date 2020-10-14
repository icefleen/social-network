import Profile from "./Profile";

import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  profileState: state.profileState,
});

const ProfileContainer = connect(mapStateToProps)(Profile);

export default ProfileContainer;
