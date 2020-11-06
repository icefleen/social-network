import React from "react";
import styles from "./ProfileNewPost.module.scss";
import classnames from "classnames";
import { Field, reduxForm } from "redux-form";
import { required, maxLength300 } from "../../../utils/validators/validators";
import { Input } from "../../common/FormControls/FormControls";

const ProfileNewPost = (props) => {
  return (
    <form
      className={classnames(props.className, styles["new-post"])}
      onSubmit={props.handleSubmit}
    >
      <Field
        component={Input}
        validate={[required, maxLength300]}
        className={classnames(styles["new-post__input"])}
        type="text"
        name="postText"
        placeholder="What's in your mind?"
        isErrorPosVertical={true}
      />

      <button type="submit" className={classnames(styles["new-post__submit"])}>
        Send
      </button>
    </form>
  );
};

export default reduxForm({ form: "newPostForm" })(ProfileNewPost);
