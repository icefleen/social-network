import React from "react";
import "./Authorization.scss";
import LoginForm from "./LoginForm/LoginForm";

import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";

const Authorization = (props) => {
  const onLoginSubmit = (formData) => {
    props.login(formData.login, formData.password, formData.remember);
  };

  if (props.isLogged) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className="wrapper">
      <LoginForm onSubmit={onLoginSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
});

export default connect(mapStateToProps, { login })(Authorization);
