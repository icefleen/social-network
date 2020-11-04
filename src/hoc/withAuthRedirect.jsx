import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
});

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isLogged) return <Redirect to={"/login"} />;
      return <Component {...this.props} />;
    }
  }

  return connect(mapStateToProps)(RedirectComponent);
};
