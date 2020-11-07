import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getIsLogged } from "../redux/selectors/authSelectors";

const mapStateToProps = (state) => ({
  isLogged: getIsLogged(state),
});

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isLogged) return <Redirect to={"/auth"} />;
      return <Component {...this.props} />;
    }
  }

  return connect(mapStateToProps)(RedirectComponent);
};
