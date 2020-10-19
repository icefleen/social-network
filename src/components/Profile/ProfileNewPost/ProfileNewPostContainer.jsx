import { connect } from "react-redux";

import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import ProfileNewPost from "./ProfileNewPost";

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
});

const mapDispatchToProps = (dispatch) => ({
  addPost: () => dispatch(addPostActionCreator()),
  updateNewPostText: (newText) =>
    dispatch(updateNewPostTextActionCreator(newText)),
});

const ProfileNewPostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileNewPost);

export default ProfileNewPostContainer;
