import React from "react";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import { setUserData } from "../../redux/authReducer";
import * as axios from "axios";

class NavbarAPI extends React.Component {
  componentDidMount = () => {
    axios.get("/api/auth/me", { withCredentials: true }).then((response) => {
      if (response.data.success) {
        const { userId, email, login } = response.data.userInfo;
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
