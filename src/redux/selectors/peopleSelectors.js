export const getPeople = (state) => state.peopleState.people;

export const getfollowingInProgress = (state) =>
  state.peopleState.followingInProgress;

export const getIsFetching = (state) => state.peopleState.isFetching;
