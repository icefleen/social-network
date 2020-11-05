import React from "react";
import styles from "./LoginForm.module.scss";
import classnames from "classnames";
import { reduxForm, Field } from "redux-form";

const LoginForm = (props) => {
  return (
    <form
      action=""
      className={classnames(styles.loginForm)}
      onSubmit={props.handleSubmit}
    >
      <Field
        component="input"
        type="text"
        name="login"
        className={classnames(styles.login, styles.input)}
        placeholder="Your login"
      />
      <Field
        component="input"
        type="password"
        name="password"
        placeholder="Password"
        className={classnames(styles.password, styles.input)}
      />
      <label className={classnames(styles.label)}>
        <Field component="input" type="checkbox" name="remember" />
        <span>Remember me</span>
      </label>
      <button className={classnames(styles.loginButton)}>Login</button>
    </form>
  );
};

export default reduxForm({ form: "login" })(LoginForm);
