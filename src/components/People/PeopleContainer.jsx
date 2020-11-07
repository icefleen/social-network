import React from "react";
import People from "./People";

import { connect } from "react-redux";
import {
  clearPeople,
  toggleFollowing,
  getUsers,
  follow,
  unFollow,
} from "../../store/reducers/peopleReducer";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  getfollowingInProgress,
  getIsFetching,
  getPeople,
} from "../../store/selectors/peopleSelectors";

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
        people={this.props.people}
        followingInProgress={this.props.followingInProgress}
        isFetching={this.props.isFetching}
        loadUsers={this.loadUsers}
        follow={this.follow}
        unFollow={this.unFollow}
      />
    );
  };
}

const mapStateToProps = (state) => ({
  people: getPeople(state),
  followingInProgress: getfollowingInProgress(state),
  isFetching: getIsFetching(state),
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
