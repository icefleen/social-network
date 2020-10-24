import { connect } from "react-redux";

import { addPost, updateNewPostText } from "../../../redux/profileReducer";
import ProfileNewPost from "./ProfileNewPost";

const mapStateToProps = (state) => ({});

const ProfileNewPostContainer = connect(mapStateToProps, {
  addPost,
  updateNewPostText,
})(ProfileNewPost);

export default ProfileNewPostContainer;
