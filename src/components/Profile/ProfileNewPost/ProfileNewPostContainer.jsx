import { connect } from "react-redux";

import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import ProfileNewPost from "./ProfileNewPost";

const mapDispatchToProps = (dispatch) => ({
  addPost: () => dispatch(addPostActionCreator()),
  updateNewPostText: (newText) =>
    dispatch(updateNewPostTextActionCreator(newText)),
});

const ProfileNewPostContainer = connect(() => {}, mapDispatchToProps)(
  ProfileNewPost
);

export default ProfileNewPostContainer;
