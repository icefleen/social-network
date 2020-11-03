import React from "react";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import { setUserData, getUserData } from "../../redux/authReducer";

class NavbarAPI extends React.Component {
  componentDidMount = () => {
    this.props.getUserData();
  };

  render() {
    return <Navbar {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => ({
  auth: state.auth,
  ownProps,
});

export default connect(mapStateToProps, { setUserData, getUserData })(
  NavbarAPI
);
