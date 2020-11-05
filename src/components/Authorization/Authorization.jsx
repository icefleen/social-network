import React from "react";
import "./Authorization.scss";
// import styles from "./Login.module.scss";
// import classnames from "classnames";
import LoginForm from "./LoginForm/LoginForm";

const Authorization = (props) => {
  const onLoginSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="wrapper">
      <LoginForm onSubmit={onLoginSubmit} />
    </div>
  );
};

export default Authorization;
