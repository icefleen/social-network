import React from "react";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import { getUserData } from "../../redux/authReducer";

class NavbarAPI extends React.Component {
  componentDidMount = () => {
    this.props.getUserData();
  };

  render() {
    return <Navbar {...this.props} />;
  }
}

export default connect(null, { getUserData })(NavbarAPI);
