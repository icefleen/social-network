import React from "react";
import styles from "./NewMessage.module.scss";
import classnames from "classnames";

import { Field, reduxForm } from "redux-form";

const NewMessage = (props) => {
  return (
    <form
      className={classnames(styles["new-message"])}
      onSubmit={props.handleSubmit}
    >
      <Field
        component="input"
        className={classnames(styles["new-message__input"])}
        type="text"
        name="messageText"
        placeholder="Write a message..."
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
