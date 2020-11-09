import React from "react";
import styles from "./NewMessage.module.scss";
import classnames from "classnames";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../common/FormControls/FormControls";
import { required } from "../../../utils/validators";

const NewMessage = ({ handleSubmit }) => {
  return (
    <form className={classnames(styles["new-message"])} onSubmit={handleSubmit}>
      <Field
        component={Input}
        validate={[required]}
        className={classnames(styles["new-message__input"])}
        type="text"
        name="messageText"
        placeholder="Write a message..."
        isErrorPosVertical={true}
      />

      <button
        type="submit"
        className={classnames(styles["new-message__submit"])}
      >
        Send
      </button>
    </form>
  );
};

export default reduxForm({ form: "newMessageForm" })(NewMessage);
