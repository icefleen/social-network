import React from "react";
import People from "./People";

import { connect } from "react-redux";
import {
  clearPeople,
  toggleFollowing,
  getUsers,
  follow,
  unFollow,
} from "../../redux/peopleReducer";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class PeopleAPI extends React.Component {
  componentDidMount = () => {
    this.loadUsers(0);
  };

  componentWillUnmount = () => {
    this.props.clearPeople();
  };

  loadUsers = (offset) => {
    this.props.getUsers(offset);
  };

  follow = (userId) => {
    this.props.follow(userId);
  };

  unFollow = (userId) => {
    this.props.unFollow(userId);
  };

  render = () => {
    return (
      <People
        className={this.props.className}
        peopleState={this.props.peopleState}
        loadUsers={this.loadUsers}
        follow={this.follow}
        unFollow={this.unFollow}
      />
    );
  };
}

const mapStateToProps = (state) => ({
  peopleState: state.peopleState,
});

export default compose(
  connect(mapStateToProps, {
    follow,
    unFollow,
    clearPeople,
    toggleFollowing,
    getUsers,
  }),
  withAuthRedirect
)(PeopleAPI);
