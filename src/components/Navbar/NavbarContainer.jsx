import React from "react";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import { setUserData } from "../../redux/authReducer";
import { authAPI } from "../../api/api";

class NavbarAPI extends React.Component {
  componentDidMount = () => {
    authAPI.getUserData().then((data) => {
      if (data.success) {
        const { userId, email, login } = data.userInfo;
        this.props.setUserData(userId, email, login);
      }
    });
  };

  render() {
    return <Navbar {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => ({
  auth: state.auth,
  ownProps,
});

export default connect(mapStateToProps, { setUserData })(NavbarAPI);
