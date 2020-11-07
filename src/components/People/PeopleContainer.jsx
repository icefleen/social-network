import React, { useEffect } from "react";
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

const PeopleContainer = (props) => {
  useEffect(() => {
    props.getUsers(0);
    return () => props.clearPeople();
  }, []);

  return (
    <People
      people={props.people}
      followingInProgress={props.followingInProgress}
      isFetching={props.isFetching}
      getUsers={props.getUsers}
      follow={props.follow}
      unFollow={props.unFollow}
    />
  );
};

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
)(PeopleContainer);
