import React from "react";
import "./Authorization.scss";
import LoginForm from "./LoginForm/LoginForm";
import { connect } from "react-redux";
import { login } from "../../store/reducers/authReducer";
import { Redirect } from "react-router-dom";
import { getIsLogged } from "../../store/selectors/authSelectors";

const Authorization = ({ login, isLogged }) => {
  const onLoginSubmit = (formData) => {
    login(formData.login, formData.password, formData.remember);
  };

  if (isLogged) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className="wrapper">
      <LoginForm onSubmit={onLoginSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLogged: getIsLogged(state),
});

export default connect(mapStateToProps, { login })(Authorization);
