// import { createSelector } from "reselect";

export const getPeople = (state) => state.peopleState.people;

export const getfollowingInProgress = (state) =>
  state.peopleState.followingInProgress;

export const getIsFetching = (state) => state.peopleState.isFetching;

// reselect usage example
// export const getPeopleByName = (name) => (state) =>
//   createSelector(getPeople, (people) =>
//     people.filter((user) => user.includes(name))
//   );
