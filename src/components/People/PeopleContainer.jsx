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

const PeopleContainer = ({
  getUsers,
  people,
  followingInProgress,
  isFetching,
  follow,
  unFollow,
  clearPeople,
}) => {
  useEffect(() => {
    getUsers(0);
    return () => clearPeople();
  }, [getUsers, clearPeople]);

  return (
    <People
      people={people}
      followingInProgress={followingInProgress}
      isFetching={isFetching}
      getUsers={getUsers}
      follow={follow}
      unFollow={unFollow}
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
