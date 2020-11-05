import React from "react";
import styles from "./LoginForm.module.scss";
import classnames from "classnames";

const LoginForm = (props) => {
  return (
    <form action="" className={classnames(styles.loginForm)}>
      <input
        type="text"
        className={classnames(styles.login, styles.input)}
        placeholder="Your login"
      />
      <input
        type="password"
        name=""
        id=""
        placeholder="Password"
        className={classnames(styles.password, styles.input)}
      />
      <label className={classnames(styles.label)}>
        <input type="checkbox" name="" id="" />
        <span>Remember me</span>
      </label>
      <button className={classnames(styles.loginButton)}>Login</button>
    </form>
  );
};

export default LoginForm;
