import React from "react";
import { usersAPI } from "../../api/api";
import People from "./People";

import { connect } from "react-redux";
import {
  appendPeople,
  clearPeople,
  follow,
  toggleFetching,
  unFollow,
  toggleFollowing,
} from "../../redux/peopleReducer";

class PeopleAPI extends React.Component {
  componentDidMount = () => {
    this.loadUsers(0);
  };

  componentWillUnmount = () => {
    this.props.clearPeople();
  };

  loadUsers = (offset) => {
    this.props.toggleFetching(true);

    usersAPI.getUsers(offset, 3).then((data) => {
      this.props.toggleFetching(false);
      this.props.appendPeople(data.items);
    });
  };

  follow = (userId) => {
    this.props.toggleFollowing(true, userId);

    usersAPI.follow(userId).then((data) => {
      if (data.success) {
        this.props.follow(userId);
        this.props.toggleFollowing(false, userId);
      }
    });
  };

  unFollow = (userId) => {
    this.props.toggleFollowing(true, userId);

    usersAPI.unFollow(userId).then((data) => {
      if (data.success) {
        this.props.unFollow(userId);
        this.props.toggleFollowing(false, userId);
      }
    });
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

export default connect(mapStateToProps, {
  follow,
  unFollow,
  appendPeople,
  clearPeople,
  toggleFetching,
  toggleFollowing,
})(PeopleAPI);
